<template>
    <div class="t-contents t-not-article-not-index">
        <CategoryMenu />
        <PageTitle :pageTitle="`カテゴリー  -  ${ $route.params.id }`"/>
        <div class="t-desktop-one-column">
          <div class="t-desktop-one-column__inner">
            <p class="p-post-category-search-result__description" v-if='description' >{{ description }}</p>
            <div class="a-heading-mini">検索結果 {{ articles.length - 1 }}件</div>
            <div class="m-filter">
              <div class="a-label">相談者のカテゴリーで絞り込み</div>
              <div class="a-selectbox">
                <select name="name">
                  <option value="female">女性</option>
                  <option value="male">男性</option>
                  <option value="others">その他</option>
                </select>
              </div>
              <div class="a-selectbox">
                <select name="name">
                  <option value="A">20代前半</option>
                  <option value="B">選択肢B</option>
                  <option value="O">選択肢C</option>
                  <option value="D">選択肢D</option>
                </select>
              </div>
            </div>
            <div class="o-list">
              <ListItem :article="article" v-for="article in articles" v-bind:key="article.id" />
            </div>
            <ButtonSeeMore />
          </div>
        </div>
        <div class="o-list-block-area">
          <ListBlock :title="'ピックアップ記事'" :articles="articles_sub1" />
          <ListBlock :title="'話題の記事'" :articles="articles_sub2" />
          <ListBlock :title="'編集者のおすすめ'" :articles="articles_sub3" />
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
  components: {
    ListBlock,
    CategoryMenu,
    PageTitle,
    ButtonSeeMore,
    ListItem
  },
  head: {
    bodyAttrs: {
      class: 'p-post-category-search-result'
    }
  },
  methods: {
     ...mapActions('pages/categories',['getCategories'])
  },
  computed:{
    ...mapState("pages/categories",{
      articles: state => state.articles,
      description: state => state.description,
      articles_sub1: state => state.articles_sub1,
      articles_sub2: state => state.articles_sub2,
      articles_sub3: state => state.articles_sub3
    })
  },
  async asyncData({ store,route }) {
    await store.dispatch('pages/categories/getCategories', {category: route.params.id})
  }
}
</script>

<style>

</style>
