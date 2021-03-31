<template>
    <div class="t-desktop-two-columns">
      <div class="t-desktop-two-columns__left">
        <div class="o-list-block-area">
          <ListBlock
          :title="'最新の記事'"
          :articles="dipsItemsLatest" 
          :articlesHidden="dipsItemsHiddenLatest" 
          v-on:clicked="showNextLatest"
          :isEndPage="isEndPageLatest" />
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
          <ListBlockRanking
          :title="'閲覧数ランキング'"
          :articles="dipsItemsRankingView"
          :articlesHidden="dipsItemsRankingView"
          v-on:clicked="showNextRankingView"
          :isEndPage="true" />
          <ListBlockRanking
          :title="'いいね数ランキング'"
          :articles="dipsItemsRankingFavorite"
          :articlesHidden="dipsItemsRankingFavorite"
          v-on:clicked="showNextRankingFavorite"
          :isEndPage="true" />
        </div>
      </div>
      <div class="t-desktop-two-columns__right">
        <div class="p-index__banner-area">
          <nuxt-link to="/about" width="260px" height="260px">
            <img v-lazy="'about-banner.jpg'" alt="About Loverage">
          </nuxt-link>
        </div>
        <div class="p-index__banner-area">
          <adsbygoogle
          :ad-slot="'5127348145'"
          :ad-style="{ display: 'block' }"
          :ad-format="'auto'"
          />
        </div>
      </div>
    </div>
</template>

<script>
const ListBlock = () => import('~/components/organism/list-block.vue')
const ListBlockRanking = () => import('~/components/organism/list-block--ranking.vue')
import { mapGetters } from 'vuex'

export default {
  layout: "index",
  loading: false,
  components: {
    ListBlock,
    ListBlockRanking
  },
  head: {
    bodyAttrs: {
      class: 'p-index'
    },
    title: "Loverage|2択の恋愛相談コミュニティ",
    meta: [
      { hid: 'description', name: 'description', content: '2択の恋愛相談コミュニティ『Loverage』／日々の恋愛の中で誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。そんなあなたの恋愛にまつわる相談事を、2択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。'},
      { hid: 'og:description', name: 'og:description', content: '2択の恋愛相談コミュニティ『Loverage』／日々の恋愛の中で誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。そんなあなたの恋愛にまつわる相談事を、2択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。'},
      { hid: 'og:title', property: 'og:title', content: 'Loverage|2択の恋愛相談コミュニティ'},
      { hid: 'og:image', property: 'og:image', content: `${process.env.BASE_URL}/ogp.png` }
    ]
  },
  mounted(){
      this.$store.dispatch('shared/latest/resetPageCount')
      this.$store.dispatch('shared/editors_pick/resetPageCount')
      this.$store.dispatch('shared/hot_topic/resetPageCount')
      this.$store.dispatch('shared/featured/resetPageCount')
      this.$store.dispatch('shared/ranking_view/resetPageCount')
      this.$store.dispatch('shared/ranking_favorite/resetPageCount')
  },
  methods: {
    showNextHotTopic(){ this.$store.dispatch('shared/hot_topic/showNextPage')},
    showNextEditors(){ this.$store.dispatch('shared/editors_pick/showNextPage')},
    showNextFeatured(){　this.$store.dispatch('shared/featured/showNextPage')},
    showNextLatest(){　this.$store.dispatch('shared/latest/showNextPage')},
    showNextRankingView(){　this.$store.dispatch('shared/ranking_view/showNextPage')},
    showNextRankingFavorite(){　this.$store.dispatch('shared/ranking_favorite/showNextPage')},
  },
  computed:{
      ...mapGetters({
        // 最新の記事
        articleCountLatest:'shared/latest/articleCount',
        dipsItemsLatest:'shared/latest/dipsItems',
        dipsItemsHiddenLatest:'shared/latest/dipsItemsHidden',
        isEndPageLatest:'shared/latest/isEndPage',
        pageCountLatest:'shared/latest/pageCount',
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
        // 閲覧数ランキング
        articleCountRankingView:'shared/ranking_view/articleCount',
        dipsItemsRankingView:'shared/ranking_view/dipsItems',
        dipsItemsHiddenRankingView:'shared/ranking_view/dipsItemsHidden',
        isEndPageRankingView:'shared/ranking_view/isEndPage',
        pageCountRankingView:'shared/ranking_view/pageCount',
        // いいね数ランキング
        articleCountRankingFavorite:'shared/ranking_favorite/articleCount',
        dipsItemsRankingFavorite:'shared/ranking_favorite/dipsItems',
        dipsItemsHiddenRankingFavorite:'shared/ranking_favorite/dipsItemsHidden',
        isEndPageRankingFavorite:'shared/ranking_favorite/isEndPage',
        pageCountRankingFavorite:'shared/ranking_favorite/pageCount',
    }),
  },
  async asyncData({ store }) {
    await Promise.all([
      store.dispatch('shared/articles/getOverviewPosts'),
      store.dispatch('shared/editors_pick/getArticles'),
      store.dispatch('shared/hot_topic/getArticles'),
      store.dispatch('shared/featured/getArticles'),
      store.dispatch('shared/latest/getArticles'),
      store.dispatch('shared/ranking_view/getArticles'),
      store.dispatch('shared/ranking_favorite/getArticles'),
      store.dispatch('shared/categories/getCategoryList')
    ])
  }
}
</script>

<style>

</style>
