<template>
    <div class="o-article-title-area">
      <div class="o-article-title-area__inner">
          <div class="o-article-title-area__category">
          <a href="" class="a-tag a-tag--category">{{ category }}</a>についての相談
          </div>
          <h1><div class="o-article-title-area__title">{{ title }}</div></h1>
          <div class="o-article-title-area__left">
          <div class="a-label">{{ gender|to_jp_gender }}{{ age|to_jp_age }}</div>
          <Likes :count="likesCount" />
          <Views :count="viewsCount" />
          </div>
          <div class="o-article-title-area__right">
          <div class="o-article-title-area__date">{{ created_at|format_datetime }}</div>
          </div>
      </div>
    </div>
</template>


<script>
import Likes from '~/components/atom/likes.vue'
import Views from '~/components/atom/views.vue'

export default {
  name: "ArticleTitleArea",
  props: {
    category: {
      type: [String],
      default: ""
    },
    title: {
      type: [String],
      default: ""
    },
    gender: {
      type: [String],
      default: ""
    },
    age: {
      type: [String],
      default: ""
    },
    created_at: {
      type: [String],
      default: ""
    },
    likesCount: {
      type: [Number],
      default: 0
    },
    viewsCount: {
      type: [Number],
      default: 0
    }
  },
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