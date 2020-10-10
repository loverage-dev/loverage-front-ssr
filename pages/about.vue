<template>
  <div class="t-contents t-not-article-not-index">
    <CategoryMenu />
    <PageTitle />
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
      <ListBlock
      :title="'編集者のおすすめ'"
      :articles="dipsItemsEditors"
      :articlesHidden="dipsItemsHiddenEditors" 
      v-on:clicked="showNextEditors"
      :isEndPage="isEndPageEditors" />
      <ListBlock
      :title="'話題の記事'"
      :articles="dipsItemsHotTopic"
      :articlesHidden="dipsItemsHiddenHotTopic"
      v-on:clicked="showNextHotTopic"
      :isEndPage="isEndPageHotTopic" />
      <ListBlock
      :title="'ピックアップ記事'"
      :articles="dipsItemsFeatured"
      :articlesHidden="dipsItemsHiddenFeatured"
      v-on:clicked="showNextFeatured"
      :isEndPage="isEndPageFeatured" />
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
  head: {
    bodyAttrs: {
      class: 'p-about'
    },
    title: "About|Loverage",
    meta: [
      { hid: 'description', name: 'description', content: '日々の恋愛の中で「これって自分だけ？」と感じることはありませんか？誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。Loverageは、そんなあなたの恋愛にまつわる相談事を、二択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。日々の些細な出来事から、性にまつわるプライベートなことまで、家族や友人にも言えないあなたの今の気持ちをお聞かせください。'},
      { hid: 'og:description', name: 'og:description', content: '日々の恋愛の中で「これって自分だけ？」と感じることはありませんか？誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。Loverageは、そんなあなたの恋愛にまつわる相談事を、二択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。日々の些細な出来事から、性にまつわるプライベートなことまで、家族や友人にも言えないあなたの今の気持ちをお聞かせください。'},
      { hid: 'og:title', property: 'og:title', content: 'About|Loverage'},
      { hid: 'og:image', property: 'og:image', content: `${process.env.BASE_URL}/ogp.png` }
    ]
  },
  mounted(){
    this.$store.dispatch('shared/editors_pick/resetPageCount')
    this.$store.dispatch('shared/hot_topic/resetPageCount')
    this.$store.dispatch('shared/featured/resetPageCount')
  },
   methods: {
    showNextHotTopic(){ this.$store.dispatch('shared/hot_topic/showNextPage')},
    showNextEditors(){ this.$store.dispatch('shared/editors_pick/showNextPage')},
    showNextFeatured(){　this.$store.dispatch('shared/featured/showNextPage')},
  },
  computed:{
    ...mapState("shared/hot_topic",{
      hot_topics: state => state.articles
    }),
    ...mapState("shared/featured",{
      featureds: state => state.articles
    }),
    ...mapState("shared/editors_pick",{
      editors_picks: state => state.articles
    }),
    ...mapGetters({
      // ピックアップ記事
      articleCountFeatured:'shared/featured/articleCount',
      dipsItemsFeatured:'shared/featured/dipsItems',
      dipsItemsHiddenFeatured:'shared/featured/dipsItemsHidden',
      isEndPageFeatured:'shared/featured/isEndPage',
      pageCountFeatured:'shared/featured/pageCount',
      // 編集者のおすすめ
      articleCountEditors:'shared/editors_pick/articleCount',
      dipsItemsEditors:'shared/editors_pick/dipsItems',
      dipsItemsHiddenEditors:'shared/editors_pick/dipsItemsHidden',
      isEndPageEditors:'shared/editors_pick/isEndPage',
      pageCountEditors:'shared/editors_pick/pageCount',
      // 話題の記事
      articleCountHotTopic:'shared/hot_topic/articleCount',
      dipsItemsHotTopic:'shared/hot_topic/dipsItems',
      dipsItemsHiddenHotTopic:'shared/hot_topic/dipsItemsHidden',
      isEndPageHotTopic:'shared/hot_topic/isEndPage',
      pageCountHotTopic:'shared/hot_topic/pageCount',
    })
  },
  async asyncData({ store }) {
    await Promise.all([
    store.dispatch('shared/page-title/doSetPageTitle', {title: 'About'} ),
    store.dispatch('shared/editors_pick/getArticles'),
    store.dispatch('shared/hot_topic/getArticles'),
    store.dispatch('shared/featured/getArticles'),
    ])
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