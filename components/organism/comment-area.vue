<template>

    <div class="o-comment-area">
    <div class="o-comment-area__inner">
        <h3 class="a-text-60 a-text--bold">コメント</h3>
        <Comment 
          v-for="comment in comments"
          v-bind:key="comment.origin_id"
          :content="comment.content"
          :optContent="optContent"
          :userSex="comment.user_sex"
          :userAge="comment.user_age" />
        <ButtonSeeMore />
        <div class="o-comment-area__your-answer">
        <p class="o-comment-area__your-answer-is">あなたの回答は</p>
        <YourAnswer />
        </div>
        <form action="" class="o-comment-area__your-comment">
        <div class="a-textfield">
            <textarea type="text" placeholder="コメントがあれば入力してください"></textarea>
        </div>
        <button class="a-button-primary">コメントを投稿する</button>
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
  computed:{
    ...mapState("pages/article",{
      comments: state => state.article.comments.contents,
      optContent: state => {
        if(state.article.comments.selected_opt === 'opt1'){
          return state.article.post.opt1
        }else{
          return state.article.post.opt2
        }
      }
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>