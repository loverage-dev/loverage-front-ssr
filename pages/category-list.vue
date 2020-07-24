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
            <a href=""><button class="a-button-secondary">女性10代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性10代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性10代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性10代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性20代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性20代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性20代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性20代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性30代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性30代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性30代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性30代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性40代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性40代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性40代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性40代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性50代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性50代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性50代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性50代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性60代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性60代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性60代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性60代後半</button></a>
          </li>
        </ul>
      </div>

      <div class="p-category-list__block">
        <div class="a-heading-mini">投稿者の性別</div>
        <ul class="p-category-list__block-list p-category-list__block-list--three-columns">
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">女性</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">男性</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">その他</button></a>
          </li>
        </ul>
      </div>

      <div class="p-category-list__block">
        <div class="a-heading-mini">投稿者の年代</div>
        <ul class="p-category-list__block-list p-category-list__block-list--two-columns">
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">10代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">10代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">20代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">20代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">30代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">30代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">40代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">40代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">50代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">50代後半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">60代前半</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">60代後半</button></a>
          </li>
        </ul>
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
  name: "CategoryList",
  components: {
      CategoryMenu,
      PageTitle,
      ListBlock
  },
  head: {
    bodyAttrs: {
      class: 'p-category-list'
    }
  },
  methods: {
     ...mapActions('pages/category-list',['getArticles'])
  },
  computed:{
    ...mapState("pages/category-list",{
      articles_sub1: state => state.articles_sub1,
      articles_sub2: state => state.articles_sub2,
      articles_sub3: state => state.articles_sub3,
      articles_sub4: state => state.articles_sub4
    })
  },
  async asyncData({ store }) {
    await store.dispatch('pages/category-list/getArticles')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>