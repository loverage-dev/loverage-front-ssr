<template>
    <div class="o-article-title-area">
    <div class="o-article-title-area__inner">
        <div class="o-article-title-area__category">
        <a href="" class="a-tag a-tag--category">カテゴリー</a>についての相談
        </div>
        <h1><div class="o-article-title-area__title">大学生です。この前、バイト先の店長から急に告白されました。歳は10個も上です...</div></h1>
        <div class="o-article-title-area__left">
        <div class="a-label">女性20代後半</div>
        <Likes />
        <Views />
        </div>
        <div class="o-article-title-area__right">
        <date class="o-article-title-area__date">2019/12/31 09:39</date>
        </div>
    </div>
    </div>
</template>


<script>
import Likes from '~/components/atom/likes.vue'
import Views from '~/components/atom/views.vue'

export default {
  name: "ArticleTitleArea",
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
      Likes,
      Views
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>