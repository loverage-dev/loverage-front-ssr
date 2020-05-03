<template>
<div class="t-contents t-not-article-not-index">
    <CategoryMenu />
    <PageTitle />
  <div class="t-desktop-one-column">
    <div class="t-desktop-one-column__inner">
      <ul class="p-ranking__tabs">
        <li class="p-ranking__tabs-item">
          <a href="">閲覧数</a>
        </li>
        <li class="p-ranking__tabs-item is-active">
          <a href="">いいね数</a>
        </li>
      </ul>
      <div class="o-list">
          <ListItemRanking />
          <ListItemRanking />
          <ListItemRanking />
          <ListItemRanking />
          <ListItemRanking />
          <ListItemRanking />
          <ListItemRanking />
          <ListItemRanking />
          <ListItemRanking />
          <ListItemRanking />
      </div>
      <a href=""><button class="a-button-secondary">閲覧数ランキングも見る</button></a>
    </div>
  </div>
  <div class="o-list-block-area">
      <ListBlock />
      <ListBlock />
      <ListBlock />
      <ListBlock />
  </div>
</div>

</template>

<script>
import CategoryMenu from '~/components/atom/category-menu.vue'
import PageTitle from '~/components/atom/pagetitle.vue'
import ListItemRanking from '~/components/molecule/list-item--ranking.vue'
import ListBlock from '~/components/organism/list-block.vue'

export default {
  name: "LikesRanking",
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
      CategoryMenu,
      PageTitle,
      ListItemRanking,
      ListBlock
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>