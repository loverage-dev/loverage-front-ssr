<template>
    <div class="t-desktop-two-columns">
      <div class="t-desktop-two-columns__left">
        <div class="o-list-block-area">
          <ListBlock />
          <ListBlock />
          <ListBlock />
          <ListBlock />
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
  components: {
    ListBlock
  },
   head: {
    bodyAttrs: {
      class: 'p-index'
    }
  },
  created: function(){
    this.$store.commit("setLoading", true);
    const url = 'https://limitless-crag-46636.herokuapp.com'
    this.$axios.$get(`${ url }/api/v1/overview`)
    .then(response => {
      this.$store.commit("setTopFeatureSpecial", response.key_visual)
      this.$store.commit("setTopFeatureNormal", response.others_1.articles)
      this.$store.commit("setWomensTopic", response.big_futured_for_f)
      this.$store.commit("setMensTopic", response.big_futured_for_m)
      this.$store.commit("setRankingView", response.rankings_view.articles)
      this.$store.commit("setLatest", response.latest.articles)
      this.$store.commit("setFeatured", response.featured.articles)
      this.$store.commit("setFeaturedSP", response.sub_visual)
      this.$store.commit("setHotTopic", response.hot_topic.articles)
      this.$store.commit("setEditorsPick", response.editors_picks.articles)
      this.$store.commit("setOthers1", response.others_2.articles)
      this.$store.commit("setOthers2", response.others_3.articles)
      console.log(response)
    })
    .finally(()=>{
        this.$store.commit("setLoading", false)
    })
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
