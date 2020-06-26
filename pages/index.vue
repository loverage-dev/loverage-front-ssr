<template>
    <div class="t-desktop-two-columns">
      <div class="t-desktop-two-columns__left">
        <div class="o-list-block-area">
          <ListBlock :title="'最新の記事'" :articles="latests" />
          <ListBlock :title="'編集者のおすすめ'" :articles="editors_picks" />
          <ListBlock :title="'話題の記事'" :articles="hot_topics" />
          <ListBlock :title="'ピックアップ記事'" :articles="featureds" />
        </div>
      </div>
      <div class="t-desktop-two-columns__right">
        <div class="p-index__banner-area">
          <a href="">
            <img src="~assets/images/about-banner.jpg" alt="About Loverage">
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import ListBlock from '~/components/organism/list-block.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  layout: "index",
  components: {
    ListBlock
  },
  head: {
    bodyAttrs: {
      class: 'p-index'
    }
  },
  methods: {
     ...mapActions('shared/articles',['getOverviewPosts']),
     ...mapActions('shared/categories',['getCategories'])
  },
  computed:{
    ...mapState("shared/articles",{
      featureds: state => state.featured,
      hot_topics: state => state.hot_topic,
      editors_picks: state => state.editors_pick,
      latests: state => state.latest,
    }),
    ...mapState("shared/categories",{
      categories: state => state.categories
    })
  },
  async asyncData({ store }) {
    // if (store.getters['items'].length) {
    //     return
    // }
    await store.dispatch('shared/articles/getOverviewPosts')
    await store.dispatch('shared/categories/getCategories')
  }
}
</script>

<style>

</style>
