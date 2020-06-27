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
      <ListBlock :title="'ピックアップ記事'" :articles="articles_sub1" />
      <ListBlock :title="'話題の記事'" :articles="articles_sub2" />
      <ListBlock :title="'編集者のおすすめ'" :articles="articles_sub3" />
      <ListBlock :title="'最新の記事'" :articles="articles_sub4" />
    </div>
  </div>
</template>

<script>

import CategoryMenu from '~/components/atom/category-menu.vue'
import PageTitle from '~/components/atom/pagetitle.vue'
import ListBlock from '~/components/organism/list-block.vue'
import axios from "axios";
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "About",
  props: {},
  data() {
    return {};
  },
   methods: {
     ...mapActions('pages/privacy-policy',['getArticles'])
  },
  computed:{
    ...mapState("pages/privacy-policy",{
      articles_sub1: state => state.articles_sub1,
      articles_sub2: state => state.articles_sub2,
      articles_sub3: state => state.articles_sub3,
      articles_sub4: state => state.articles_sub4
    })
  },
  async asyncData({ store }) {
    await store.dispatch('pages/privacy-policy/getArticles')
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