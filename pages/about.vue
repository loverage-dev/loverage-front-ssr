<template>
  <div class="t-contents t-not-article-not-index">
    <CategoryMenu />
    <PageTitle  :pageTitle="'About'"/>
    <div class="t-desktop-one-column">
      <div class="t-desktop-one-column__inner">
        <h2 class="a-heading-mini">「Love」 + 「Average」 = 「Loverage」</h2>
        <p class="p-about__sentences">
          日々の恋愛の中で「これって自分だけ？」と感じることはありませんか？<br>誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。<br><br>Loverageは、そんなあなたの恋愛にまつわる相談事を、二択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。<br><br>日々の些細な出来事から、性にまつわるプライベートなことまで、家族や友人にも言えないあなたの今の気持ちをお聞かせください。
        </p>
        <div class="p-about__author">
          Loverage運営事務局
        </div>
      </div>
    </div>
    <div class="o-list-block-area">
        <!-- <ListBlock :title="'最新の記事'" :articles="$store.state.latest" />
        <ListBlock :title="'編集者のおすすめ'" :articles="$store.state.editors_pick" />
        <ListBlock :title="'話題の記事'" :articles="$store.state.hot_topic" />
        <ListBlock :title="'ピックアップ記事'" :articles="$store.state.featured" /> -->
    </div>
  </div>
</template>

<script>

import CategoryMenu from '~/components/atom/category-menu.vue'
import PageTitle from '~/components/atom/pagetitle.vue'
import ListBlock from '~/components/organism/list-block.vue'
import axios from "axios";

export default {
  name: "About",
  props: {},
  data() {
    return {};
  },
  created: function(){
    // const url = 'https://limitless-crag-46636.herokuapp.com'
    // if(!this.$store.state.latest && !this.$store.state.hot_topic && !this.$store.state.editors_pick && !this.$store.state.featured){
    //   this.$store.commit("setLoading", true);
    //   axios
    //     .all([
    //       axios.get(
    //         `${ url }/api/v1/editors_picks?limit=5`
    //       ),
    //       axios.get(
    //         `${ url }/api/v1/latest?limit=5`
    //       ),
    //       axios.get(
    //         `${ url }/api/v1/hot_topics?limit=5`
    //       ),
    //       axios.get(
    //         `${ url }/api/v1/featureds?limit=5`
    //       )
    //     ])
    //     .then(
    //       axios.spread((api1Result, api2Result, api3Result, api4Result) => {
    //         this.$store.commit("setEditorsPick", api1Result.data.articles);
    //         this.$store.commit("setLatest", api2Result.data.articles);
    //         this.$store.commit("setHotTopic", api3Result.data.articles);
    //         this.$store.commit("setFeatured", api4Result.data.articles);
    //       })
    //     )
    //     .finally(() => {
    //       this.$store.commit("setLoading", false);
    //     });
    // }
  },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {
      CategoryMenu,
      PageTitle,
      ListBlock
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>