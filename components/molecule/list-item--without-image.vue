<template>

    <a href="">
    <div class="m-list-item">
        <div class="m-list-item__right">
        <h6 class="m-list-item__title">僕は男性とのセックスでも快感を得ることができる、いわゆるバイセクシャルの人間です。数日前、クラク...</h6>
        <div class="m-list-item__info">
            <a href="" class="a-tag a-tag--category">カテゴリー</a>
            <Likes />
            <Views />
        </div>
        </div>
    </div>
    </a>

</template>


<script>
import Likes from '~/components/atom/likes.vue'
import Views from '~/components/atom/views.vue'

export default {
  name: "ListItemWithoutImage",
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