<template>
    <div class="t-desktop-two-columns">
      <div class="t-desktop-two-columns__left">
        <div class="o-list-block-area">
          <ListBlock :title="'最新の記事'" :articles="$store.state.latest" />
          <ListBlock :title="'編集者のおすすめ'" :articles="$store.state.editors_pick" />
          <ListBlock :title="'話題の記事'" :articles="$store.state.hot_topic" />
          <ListBlock :title="'ピックアップ記事'" :articles="$store.state.featured" />
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
  async fetch({store, app:{$axios, $API_URL}}){
    let { data } = await $axios.get(`${ $API_URL() }/api/v1/overview`)
    store.commit('setTopFeatureSpecial', data.key_visual)
    store.commit("setTopFeatureNormal", data.others_1.articles)
    store.commit("setWomensTopic", data.big_futured_for_f)
    store.commit("setMensTopic", data.big_futured_for_m)
    store.commit("setRankingView", data.rankings_view.articles)
    store.commit("setLatest", data.latest.articles)
    store.commit("setFeatured", data.featured.articles)
    store.commit("setFeaturedSP", data.sub_visual)
    store.commit("setHotTopic", data.hot_topic.articles)
    store.commit("setEditorsPick", data.editors_picks.articles)
    store.commit("setOthers1", data.others_2.articles)
    store.commit("setOthers2", data.others_3.articles)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
