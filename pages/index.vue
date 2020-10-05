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
        </div>
      </div>
      <div class="t-desktop-two-columns__right">
        <div class="p-index__banner-area">
          <nuxt-link to="/about" width="260px" height="260px">
            <img v-lazy="'about-banner.jpg'" alt="About Loverage">
          </nuxt-link>
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
  },
  methods: {

     ...mapActions('shared/articles',['getOverviewPosts']),
     ...mapActions('shared/categories',['getCategoryList']),

     ...mapActions('shared/hot_topic',['getArticles']),
     ...mapActions('shared/hot_topic',['showNextPage']),
     ...mapActions('shared/hot_topic',['resetPageCount']),
    　showNextHotTopic(){ this.$store.dispatch('shared/hot_topic/showNextPage')},

     ...mapActions('shared/editors_pick',['getArticles']),
     ...mapActions('shared/editors_pick',['showNextPage']),
     ...mapActions('shared/editors_pick',['resetPageCount']),
    showNextEditors(){ this.$store.dispatch('shared/editors_pick/showNextPage')},

     ...mapActions('shared/featured',['getArticles']),
     ...mapActions('shared/featured',['showNextPage']),
     ...mapActions('shared/featured',['resetPageCount']),
    showNextFeatured(){　this.$store.dispatch('shared/featured/showNextPage')},

     ...mapActions('shared/latest',['getArticles']),
     ...mapActions('shared/latest',['showNextPage']),
     ...mapActions('shared/latest',['resetPageCount']),
    showNextLatest(){　this.$store.dispatch('shared/latest/showNextPage')},
  },
  computed:{
      ...mapState("shared/latest",{
        latests: state => state.articles
      }),
      ...mapState("shared/hot_topic",{
        hot_topics: state => state.articles
      }),
      ...mapState("shared/featured",{
        featureds: state => state.articles
      }),
      ...mapState("shared/editors_pick",{
        editors_picks: state => state.articles
      }),
      ...mapState("shared/categories",{
        categories: state => state.categories
      }),
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
    }),
  },
  async asyncData({ store }) {
    await Promise.all([
      store.dispatch('shared/articles/getOverviewPosts'),
      store.dispatch('shared/editors_pick/getArticles'),
      store.dispatch('shared/hot_topic/getArticles'),
      store.dispatch('shared/featured/getArticles'),
      store.dispatch('shared/latest/getArticles'),
      store.dispatch('shared/categories/getCategoryList')
    ])
  }
}
</script>

<style>

</style>
