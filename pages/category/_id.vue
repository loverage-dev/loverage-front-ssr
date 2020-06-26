<template>
    <div class="t-contents t-not-article-not-index">
        <CategoryMenu />
        <PageTitle :pageTitle="`カテゴリ  -  ${ $route.params.id }`"/>
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
  mounted: ()=>{
    // let category = this.categories.filter(c =>{
    //   return c.name == this.$route.query.category;
    // })
    // this.categoryDescription = category[0].description
  },
  async asyncData({ store,route }) {
    // await store.dispatch('shared/categories/getCategories')
    await store.dispatch('pages/categories/getCategories', {category: route.params.id})
  }
  // async fetch({store, route, app:{$axios, $API_URL}}){
  //   console.log(decodeURI(route.query.title))
  //   console.log(decodeURI(route.params.id))
  //   let { data } = await $axios.get(`${ $API_URL() }/api/v1/articles?category=${decodeURI(route.query.title)}`)
  //   // store.commit('setTopFeatureSpecial', data.key_visual)
  //   console.log(data)
  // }
}
</script>

<style>

</style>
