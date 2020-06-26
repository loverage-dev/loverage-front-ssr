<template>

    <a href="">
    <div class="m-list-item">
        <Rank :rank='rank' />
        <div class="m-list-item__left"><img src="~assets/images/dammy-thumbnail.jpg" alt=""></div>
        <div class="m-list-item__right">
        <h6 class="m-list-item__title">{{ article.content }}</h6>
        <div class="m-list-item__info">
            <a href="" class="a-tag a-tag--category">{{ article.category }}</a>
              <Likes :count="article.ref_count" />
              <Views :count="article.ref_count" />
        </div>
        </div>
    </div>
    </a>

</template>


<script>
import Likes from '~/components/atom/likes.vue'
import Views from '~/components/atom/views.vue'
import Rank from '~/components/atom/rank.vue'

export default {
  name: "ListItemRanking",
  props: {
    article: {
      type: Object,
      default: null
    },
    rank: {
      type: Number,
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
      Views,
      Rank
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>