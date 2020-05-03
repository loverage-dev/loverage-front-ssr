<template>

    <div class="o-comment-area">
    <div class="o-comment-area__inner">
        <h3 class="a-text-60 a-text--bold">コメント</h3>
        <Comment />
        <Comment />
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

export default {
  name: "CommentArea",
  props: {},
  data() {
    return {};
  },
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {
      Comment,
      ButtonSeeMore,
      YourAnswer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>