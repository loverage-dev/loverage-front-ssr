<template>
    <div class="t-contents t-not-article-not-index">
        <CategoryMenu />
        <PageTitle :pageTitle="`カテゴリー  -  ${ $route.params.id }`"/>
        <div class="t-desktop-one-column">
          <div class="t-desktop-one-column__inner">
            <p class="p-post-category-search-result__description" v-if='description' >{{ description }}</p>
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
              <ListItem :article="article" v-for="article in articlesGrepped" v-bind:key="article.id" />
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
  data: () => {
    return {
      grepAgeValue: "",
      grepSexValue: "",
    };
  },
  head: {
    bodyAttrs: {
      class: 'p-post-category-search-result'
    }
  },
  methods: {
     ...mapActions('pages/categories',['getCategories']),
     ...mapActions('pages/categories',['filterBy']),
    onGrep(age, sex){
      this.$store.dispatch('pages/categories/filterBy', {age: age, sex: sex})
    }
  },
  computed:{
    ...mapState("pages/categories",{
      articles: state => state.articles,
      articlesGrepped: state => state.articlesGrepped,
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
