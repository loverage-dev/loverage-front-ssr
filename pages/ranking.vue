<template>
  <div class="t-contents t-not-article-not-index">
    <CategoryMenu />
    <PageTitle  />
    <div class="t-desktop-one-column">
      <div class="t-desktop-one-column__inner">
        <ul class="p-ranking__tabs">
            <li class="p-ranking__tabs-item" :class="{ 'is-active': mode === 'view' }">
              <nuxt-link 
                :to="{ path: encodeURI('/ranking/')}" 
                @click.native="toRankingView()">
                閲覧数
              </nuxt-link>
            </li>
            <li class="p-ranking__tabs-item" :class="{ 'is-active': mode === 'favorite' }">
            <nuxt-link 
              :to="{ path: encodeURI('/ranking/')}"
              @click.native="toRankingFavorite()">
              いいね数
            </nuxt-link>
            </li>
        </ul>
        <div class="o-list">
          <ListItemRanking 
            v-show="mode === 'view'"
            :article="article" 
            :rank="index + 1" 
            v-for="(article,index) in rankings_view" 
            v-bind:key='`view_${article.id}`' />
          <ListItemRanking 
            v-show="mode === 'favorite'" 
            :article="article" 
            :rank="index + 1" 
            v-for="(article,index) in rankings_favorite" 
            v-bind:key='`favorite_${article.id}`' />
        </div>
        <nuxt-link 
          v-if="mode === 'view'" 
          :to="{ path: encodeURI('/ranking/')}" 
          @click.native="toRankingFavorite()">
          <button class="a-button-secondary">いいね数ランキングも見る</button>
        </nuxt-link>
        <nuxt-link 
          v-if="mode === 'favorite'"
          :to="{ path: encodeURI('/ranking/')}"
          @click.native="toRankingView()">
          <button class="a-button-secondary">閲覧数ランキングも見る</button>
        </nuxt-link>
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

const CategoryMenu = () => import('~/components/atom/category-menu.vue')
const PageTitle = () => import('~/components/atom/pagetitle.vue')
const ListBlock = () => import('~/components/organism/list-block.vue')
const ListItemRanking = () => import('~/components/molecule/list-item--ranking.vue')
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: "Ranking",
  components: {
    CategoryMenu,
    PageTitle,
    ListBlock,
    ListItemRanking
  },
  head: {
    bodyAttrs: {
      class: 'p-ranking'
    },
    title: "ランキング|Loverage",
    meta: [
      { hid: 'description', name: 'description', content: 'これまで投稿された相談について、閲覧数・回答数のランキングのTop10を見ることができます。'},
      { hid: 'og:description', name: 'og:description', content: 'これまで投稿された相談について、閲覧数・回答数のランキングのTop10を見ることができます。'},
      { hid: 'og:title', property: 'og:title', content: 'ランキング|Loverage'},
      { hid: 'og:image', property: 'og:image', content: `${process.env.BASE_URL}/ogp.png` }
    ]
  },
  mounted(){
    this.$store.dispatch('shared/editors_pick/resetPageCount')
    this.$store.dispatch('shared/hot_topic/resetPageCount')
    this.$store.dispatch('shared/featured/resetPageCount')
  },
  methods: {
     ...mapActions('pages/rankings',[
            'toRankingView',
            'toRankingFavorite']),
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
    ...mapState("pages/rankings",{
      mode: state => state.mode
    }),
    ...mapState("shared/ranking_favorite",{
      rankings_favorite: state => state.articles,
    }),
    ...mapState("shared/ranking_view",{
      rankings_view: state => state.articles,
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
      store.dispatch('shared/page-title/doSetPageTitle', {title: 'Ranking'} ),
      store.dispatch('shared/ranking_favorite/getArticles'),
      store.dispatch('shared/ranking_view/getArticles'),
      store.dispatch('shared/editors_pick/getArticles'),
      store.dispatch('shared/hot_topic/getArticles'),
      store.dispatch('shared/featured/getArticles')])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>