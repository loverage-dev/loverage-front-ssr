<template>
<div class="t-contents t-not-article-not-index">
  <CategoryMenu />
  <PageTitle :pageTitle="'カテゴリー'" />
  <div class="t-desktop-one-column">
    <div class="t-desktop-one-column__inner">
      <div class="p-category-list__block">
        <div class="a-heading-mini">投稿内容</div>
        <ul class="p-category-list__block-list p-category-list__block-list--two-columns">
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{  path: encodeURI('/category/出会い')}">
              <button class="a-button-secondary">出会い</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link :to="{　path: encodeURI('/category/片想い')}">
              <button class="a-button-secondary">片想い</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{　path: encodeURI('/category/友達・同僚')}">
            <button class="a-button-secondary">友達・同僚</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{　path: encodeURI('/category/デート')}">
            <button class="a-button-secondary">デート</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{　path: encodeURI('/category/告白')}">
              <button class="a-button-secondary">告白</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{　path: encodeURI('/category/彼氏・彼女')}">
              <button class="a-button-secondary">彼氏・彼女</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{  path: encodeURI('/category/元カレ・元カノ') }">
            <button class="a-button-secondary">元カレ・元カノ</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/結婚') }">
              <button class="a-button-secondary">結婚</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/結婚生活')}">
              <button class="a-button-secondary">結婚生活</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/別れ')}">
              <button class="a-button-secondary">別れ</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/浮気・不倫')}">
              <button class="a-button-secondary">浮気・不倫</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/失恋')}">
              <button class="a-button-secondary">失恋</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/性・SEX')}">
              <button class="a-button-secondary">性・SEX</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/その他')}">
              <button class="a-button-secondary">その他</button>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="p-category-list__block">
        <div class="a-heading-mini">投稿者の性別・年代</div>
        <ul class="p-category-list__block-list p-category-list__block-list--two-columns">
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性10代前半')}">
              <button class="a-button-secondary">女性10代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性10代前半')}">
              <button class="a-button-secondary">男性10代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性10代後半')}">
              <button class="a-button-secondary">女性10代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性10代後半')}">
              <button class="a-button-secondary">男性10代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性20代前半')}">
              <button class="a-button-secondary">女性20代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性20代前半')}">
              <button class="a-button-secondary">男性20代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性20代後半')}">
              <button class="a-button-secondary">女性20代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性20代後半')}">
              <button class="a-button-secondary">男性20代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性30代前半')}">
              <button class="a-button-secondary">女性30代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性30代前半')}">
              <button class="a-button-secondary">男性30代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性30代後半')}">
              <button class="a-button-secondary">女性30代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性30代後半')}">
              <button class="a-button-secondary">男性30代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性40代前半')}">
              <button class="a-button-secondary">女性40代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性40代前半')}">
              <button class="a-button-secondary">男性40代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性40代後半')}">
              <button class="a-button-secondary">女性40代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性40代後半')}">
              <button class="a-button-secondary">男性40代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性50代前半')}">
              <button class="a-button-secondary">女性50代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性50代前半')}">
              <button class="a-button-secondary">男性50代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性50代後半')}">
              <button class="a-button-secondary">女性50代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性50代後半')}">
              <button class="a-button-secondary">男性50代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性60代前半')}">
              <button class="a-button-secondary">女性60代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性60代前半')}">
              <button class="a-button-secondary">男性60代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性60代後半')}">
              <button class="a-button-secondary">女性60代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性60代後半')}">
              <button class="a-button-secondary">男性60代後半</button>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="p-category-list__block">
        <div class="a-heading-mini">投稿者の性別</div>
        <ul class="p-category-list__block-list p-category-list__block-list--three-columns">
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/女性')}">
              <button class="a-button-secondary">女性</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/男性')}">
              <button class="a-button-secondary">男性</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/その他')}">
              <button class="a-button-secondary">その他</button>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="p-category-list__block">
        <div class="a-heading-mini">投稿者の年代</div>
        <ul class="p-category-list__block-list p-category-list__block-list--two-columns">
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/10代前半')}">
              <button class="a-button-secondary">10代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/10代後半')}">
              <button class="a-button-secondary">10代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/20代前半')}">
              <button class="a-button-secondary">20代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/20代後半')}">
              <button class="a-button-secondary">20代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/30代前半')}">
              <button class="a-button-secondary">30代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/30代後半')}">
              <button class="a-button-secondary">30代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/40代前半')}">
              <button class="a-button-secondary">40代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/40代後半')}">
              <button class="a-button-secondary">40代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/50代前半')}">
              <button class="a-button-secondary">50代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/50代後半')}">
              <button class="a-button-secondary">50代後半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/60代前半')}">
              <button class="a-button-secondary">60代前半</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{ path: encodeURI('/category/60代後半')}">
              <button class="a-button-secondary">60代後半</button>
            </nuxt-link>
          </li>
        </ul>
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
  name: "CategoryList",
  components: {
      CategoryMenu,
      PageTitle,
      ListBlock
  },
  head: {
    bodyAttrs: {
      class: 'p-category-list'
    },
    title: "カテゴリー|Loverage",
    meta: [
      { hid: 'description', name: 'description', content: '投稿者のカテゴリーから相談を検索することができます。カテゴリーは次の組み合わせを指定できます。性別（男性・女性・その他）/ 年代（１０代前半・１０代後半・２０代前半・２０代後半・３０代前半・３０代後半・４０代前半・４０代後半・５０代前半・５０代後半・６０代前半・６０代後半）'},
      { hid: 'og:description', name: 'og:description', content: '投稿者のカテゴリーから相談を検索することができます。カテゴリーは次の組み合わせを指定できます。性別（男性・女性・その他）/ 年代（１０代前半・１０代後半・２０代前半・２０代後半・３０代前半・３０代後半・４０代前半・４０代後半・５０代前半・５０代後半・６０代前半・６０代後半）'},
      { hid: 'og:title', property: 'og:title', content: 'カテゴリー|Loverage'},
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
    ...mapState("shared/categories",{
      categoryList: state => state.categoryList
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

    await store.dispatch('shared/categories/getCategoryList', null, { root: true })
    await store.dispatch('shared/editors_pick/getArticles')
    await store.dispatch('shared/hot_topic/getArticles')
    await store.dispatch('shared/featured/getArticles')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>