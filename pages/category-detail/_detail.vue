<template>
    <div class="t-contents t-not-article-not-index">
        <CategoryMenu />
        <PageTitle :pageTitle="`カテゴリ  -  ${$route.query.category}`"/>
    </div>
</template>

<script>
import CategoryMenu from '~/components/atom/category-menu.vue'
import ListBlock from '~/components/organism/list-block.vue'
import PageTitle from '~/components/atom/pagetitle.vue'

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
  async fetch({store, route, app:{$axios, $API_URL}}){
      console.log(route.query)
    let { data } = await $axios.get(`${ $API_URL() }/api/v1/articles?category=${route.query.title}`)
    // store.commit('setTopFeatureSpecial', data.key_visual)
    console.log(data)
  }
}
</script>

<style>

</style>
