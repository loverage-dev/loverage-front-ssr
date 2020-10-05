<template>
    <div class="t-contents t-not-article-not-index">
        <CategoryMenu />
        <PageTitle :pageTitle="title" />
        <div class="t-desktop-one-column">
          <div class="t-desktop-one-column__inner">
            <div class="a-heading-mini">検索結果 {{ articlesGrepped.length }}件</div>
            <div class="m-filter">
              <div class="a-label">相談者のカテゴリーで絞り込み</div>
              <div class="a-selectbox">
                <select name="gender" @change="onGrep(grepAgeValue,grepSexValue)" v-model="grepSexValue">
                  <option value>性別</option>
                  <option value="f">女性</option>
                  <option value="m">男性</option>
                  <option value="o">その他</option>
                </select>
              </div>
              <div class="a-selectbox">
                <select name="age" @change="onGrep(grepAgeValue,grepSexValue)" v-model="grepAgeValue">
                  <option value>年代</option>
                  <option value="e_10s">10代前半</option>
                  <option value="l_10s">10代後半</option>
                  <option value="e_20s">20代前半</option>
                  <option value="l_20s">20代後半</option>
                  <option value="e_30s">30代前半</option>
                  <option value="l_30s">30代後半</option>
                  <option value="e_40s">40代前半</option>
                  <option value="l_40s">40代後半</option>
                  <option value="e_50s">50代前半</option>
                  <option value="l_50s">50代後半</option>
                  <option value="e_60s">60代前半</option>
                  <option value="l_60s">60代後半</option>
                </select>
              </div>
            </div>
            <div class="o-list">
              <ListItem :article="article" v-for="article in dipsItems" v-bind:key="article.id" />
              <ListItem style="display:none;" :article="article" v-for="article in dipsItemsHidden" v-bind:key="'none-' + article.id" />
            </div>
            <ButtonSeeMore v-on:clicked="showNext" v-if="!isEndPage" />
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
import ListBlock from '~/components/organism/list-block.vue'
import ListItem from '~/components/molecule/list-item.vue'
import PageTitle from '~/components/atom/pagetitle.vue'
import ButtonSeeMore from '~/components/atom/button-seemore.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  layout: "default",
  watchQuery: ['keyword'],
  components: {
    ListBlock,
    CategoryMenu,
    PageTitle,
    ButtonSeeMore,
    ListItem
  },
  data: () => {
    return {
      grepAgeValue: "",
      grepSexValue: "",
      title: "",
      meta:{
        title: "",
        description: ""
      }
    };
  },
  head(){
    this.meta.title = this.title;
    this.meta.description = this.description;
    return{
      bodyAttrs: {
        class: 'p-post-category-search-result'
      },
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:description', name: 'og:description', content: this.meta.description },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:image', property: 'og:image', content: `${process.env.BASE_URL}/ogp.png` }
      ]
    }
  },
  mounted(){
    this.$store.dispatch('pages/search/resetPageCount')
    this.$store.dispatch('shared/editors_pick/resetPageCount')
    this.$store.dispatch('shared/hot_topic/resetPageCount')
    this.$store.dispatch('shared/featured/resetPageCount')
    //キーワード検索の場合
    if(this.$route.query.keyword) {
      this.title = `検索結果  -  ${ this.$route.query.keyword }`
    }
    //タグ検索の場合
    if(this.$route.query.tag){
      this.title = `検索結果  -  #${ this.$route.query.tag }`
    }
  },
  methods: {
     ...mapActions('pages/search',['filterBy']),
     ...mapActions('pages/search',['showNextPage']),
     ...mapActions('pages/search',['resetPageCount']),


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

    onGrep(age, sex){
      this.$store.dispatch('pages/search/filterBy', {age: age, sex: sex})
      this.$store.dispatch('pages/search/resetPageCount')
    },
    showNext(){
      this.$store.dispatch('pages/search/showNextPage')
    }
  },
  computed:{
    ...mapState("pages/search",{
      articles: state => state.articles,
      articlesGrepped: state => state.articlesGrepped,
      upperPageCount: (state) => this.currentPageNum >= maxPageCountArticles ? state.articles : this.currentPageNum * 6
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
    ...mapGetters({
      articleCount:'pages/search/articleCount',
      dipsItems:'pages/search/dipsItems',
      dipsItemsHidden:'pages/search/dipsItemsHidden',
      isEndPage:'pages/search/isEndPage',
      pageCount:'pages/search/pageCount',

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
  async asyncData({ store,route,title }) {
    //キーワード検索の場合
    if(route.query.keyword) {
      await store.dispatch('pages/search/getArticlesByKeyword',{keyword: encodeURI(route.query.keyword)})
    }
    //タグ検索の場合
    if(route.query.tag){
      await store.dispatch('pages/search/getArticlesByTag',{tag: encodeURI(route.query.tag)})
    }
    await Promise.all([
      store.dispatch('shared/editors_pick/getArticles'),
      store.dispatch('shared/hot_topic/getArticles'),
      store.dispatch('shared/featured/getArticles')
    ])
    store.dispatch('pages/search/resetPageCount')
  }
}
</script>

<style>

</style>
