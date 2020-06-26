<template>
    <div class="t-contents t-not-article-not-index">
        <CategoryMenu />
        <PageTitle :pageTitle="`カテゴリー  -  ${ $route.params.id }`"/>
        {{description}}
        {{JSON.stringify(articles)}}
        {{JSON.stringify(articles_sub1)}}
        {{JSON.stringify(articles_sub2)}}
        {{JSON.stringify(articles_sub3)}}
    </div>
</template>

<script>
import CategoryMenu from '~/components/atom/category-menu.vue'
import ListBlock from '~/components/organism/list-block.vue'
import PageTitle from '~/components/atom/pagetitle.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  layout: "default",
  components: {
    ListBlock,
    CategoryMenu,
    PageTitle
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
