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
              :to="{
                path: encodeURI('/category/出会い')
              }">
              <button class="a-button-secondary">出会い</button>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <nuxt-link 
              :to="{
                path: '/category', 
                query: {title: encodeURI('片想い')} 
              }">
            <a href=""><button class="a-button-secondary">片想い</button></a>
            </nuxt-link>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">友達・同僚</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">デート</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">告白</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">彼氏・彼女</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">元カレ・元カノ</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">結婚</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">結婚生活</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">別れ</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">浮気・不倫</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">失恋</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">性・SEX</button></a>
          </li>
          <li class="p-category-list__block-list-item">
            <a href=""><button class="a-button-secondary">その他</button></a>
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
      <ListBlock :title="'最新の記事'" :articles="$store.state.latest" />
      <ListBlock :title="'編集者のおすすめ'" :articles="$store.state.editors_pick" />
      <ListBlock :title="'話題の記事'" :articles="$store.state.hot_topic" />
      <ListBlock :title="'ピックアップ記事'" :articles="$store.state.featured" />
  </div>
</div>

</template>


<script>
import CategoryMenu from '~/components/atom/category-menu.vue'
import PageTitle from '~/components/atom/pagetitle.vue'
import ListBlock from '~/components/organism/list-block.vue'
import axios from "axios";

export default {
  name: "CategoryList",
  props: {},
  data() {
    return {};
  },
  head: {
    bodyAttrs: {
      class: 'p-category-list'
    }
  },
  async fetch({store, app:{$axios, $API_URL}}){ 
    await Promise.all(
      [$axios.get(`${ $API_URL() }/api/v1/editors_picks?limit=5`),
      $axios.get(`${ $API_URL() }/api/v1/latest?limit=5`),
      $axios.get(`${ $API_URL() }/api/v1/hot_topics?limit=5`),
      $axios.get(`${ $API_URL() }/api/v1/featureds?limit=5`)]
    )
    .then(result => {
      let api1Result = result[0]
      let api2Result = result[1]
      let api3Result = result[2]
      let api4Result = result[3]
      store.commit("setEditorsPick", api1Result.data.articles);
      store.commit("setLatest", api2Result.data.articles);
      store.commit("setHotTopic", api3Result.data.articles);
      store.commit("setFeatured", api4Result.data.articles);
    }
  )
},
  // created: function(){
  //   const url = 'https://limitless-crag-46636.herokuapp.com'
  //   if(!this.$store.state.latest && !this.$store.state.hot_topic && !this.$store.state.editors_pick && !this.$store.state.featured){
  //     this.$store.commit("setLoading", true);
  //     axios
  //       .all([
  //         axios.get(
  //           `${ url }/api/v1/editors_picks?limit=5`
  //         ),
  //         axios.get(
  //           `${ url }/api/v1/latest?limit=5`
  //         ),
  //         axios.get(
  //           `${ url }/api/v1/hot_topics?limit=5`
  //         ),
  //         axios.get(
  //           `${ url }/api/v1/featureds?limit=5`
  //         )
  //       ])
  //       .then(
  //         axios.spread((api1Result, api2Result, api3Result, api4Result) => {
  //           this.$store.commit("setEditorsPick", api1Result.data.articles);
  //           this.$store.commit("setLatest", api2Result.data.articles);
  //           this.$store.commit("setHotTopic", api3Result.data.articles);
  //           this.$store.commit("setFeatured", api4Result.data.articles);
  //         })
  //       )
  //       .finally(() => {
  //         this.$store.commit("setLoading", false);
  //       });
  //   }
  // },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {
      CategoryMenu,
      PageTitle,
      ListBlock
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>