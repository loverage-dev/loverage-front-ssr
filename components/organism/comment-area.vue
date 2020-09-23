<template>

    <div class="o-comment-area">
    <div class="o-comment-area__inner">
        <h3 class="a-text-60 a-text--bold">コメント</h3>
        <Comment 
          v-for="comment in dipsItemsComments"
          v-bind:key="comment.origin_id"
          :comment="comment"
          :optContent="optContent(comment.selected_opt, opt1, opt2)" />
        <ButtonSeeMore
         v-on:clicked="showNextComments"
         :isEndPage="isEndPageComments"
         />
        <div class="o-comment-area__your-answer">
        <p class="o-comment-area__your-answer-is">あなたの回答は</p>
        <YourAnswer />
        </div>
        <form
         action=""
         v-on:change="validate()"
         class="o-comment-area__your-comment"
         v-on:submit.prevent="onSubmit">
        <div class="a-textfield">
            <textarea
             type="text"
            placeholder="コメントがあれば入力してください"
            v-bind:value="input.content"
            v-on:input="updateInputValue($event, 'content')"></textarea>
        </div>
        <button
         class="a-button-primary"
         v-bind:disabled="!canPost">コメントを投稿する</button>
        </form>
    </div>
</div>

</template>


<script>
import Comment from '~/components/molecule/comment.vue'
import ButtonSeeMore from '~/components/atom/button-seemore.vue'
import YourAnswer from '~/components/atom/your-answer.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "CommentArea",
  components: {
      Comment,
      ButtonSeeMore,
      YourAnswer
  },
  mounted(){
    this.validate();
  },
  computed:{
      ...mapState("shared/post-comment",{
        input: state => state.input,
        canPost: state => state.canPost
      }),
    ...mapState("pages/article",{
      comments: state => state.article.comments.contents,
      opt1: state => state.article.post.opt1,
      opt2: state => state.article.post.opt2,
    }),
    ...mapGetters({
      dipsItemsComments:'pages/article/dipsItems',
      dipsItemsHiddenComments:'pages/article/dipsItemsHidden',
      isEndPageComments:'pages/article/isEndPage',
      pageCountComments:'pages/article/pageCount',
      inputData:'shared/post-comment/inputData'
    })
  },
  methods:{
    ...mapActions('pages/article',['showNextPage']),
    ...mapActions('pages/article',['resetPageCount']),
    showNextComments(){
      this.$store.dispatch('pages/article/showNextPage')},
    optContent(selectedOpt, opt1, opt2){
      if(selectedOpt === 'opt1'){
        return opt1
      }else{
        return opt2
      }
    },
    validate: function() {
      //変更内容のストア反映
      this.$store.dispatch('shared/post-comment/chkCanPost');
      console.log("validate")
    },
    updateInputValue(event, item_key) {
      this.$store.dispatch('shared/post-comment/doUpdateInput', { key: item_key, value: event.target.value })
    },
    async onSubmit() {
      const postId = this.$route.params.id
      this.$store.dispatch('shared/post-comment/doPostComment', postId)
      .then((res)=>{
        //入力値をリセット
        this.$store.dispatch('shared/post-comment/resetInputData');
        //トーストを表示
        this.$store.dispatch('shared/toast/showToast', "コメントを投稿しました。");
      })
      .finally(()=>{
        console.log("submit完了")
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>