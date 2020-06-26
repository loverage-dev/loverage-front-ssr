<template>
    <div class="t-contents t-not-article-not-index">
        <CategoryMenu />
        <PageTitle  :pageTitle="'Ranking'"/>
       <div class="t-desktop-one-column">
            <div class="t-desktop-one-column__inner">
            <ul class="p-ranking__tabs">
                <li class="p-ranking__tabs-item is-active">
                <a href="">閲覧数</a>
                </li>
                <li class="p-ranking__tabs-item">
                <a href="">いいね数</a>
                </li>
            </ul>
            <div class="o-list">
                <client-only>
                    <ListItemRanking :article="article" :rank="index + 1" v-for="(article,index) in rankings_view" v-bind:key='article.id' />
                </client-only>
            </div>
            <a href=""><button class="a-button-secondary">いいね数ランキングも見る</button></a>
            </div>
        </div>
        <div class="o-list-block-area">
          <ListBlock :title="'最新の記事'" :articles="latests" />
          <ListBlock :title="'編集者のおすすめ'" :articles="editors_picks" />
          <ListBlock :title="'話題の記事'" :articles="hot_topics" />
          <ListBlock :title="'ピックアップ記事'" :articles="featureds" />
        </div>
    </div>
</template>

<script>

import CategoryMenu from '~/components/atom/category-menu.vue'
import PageTitle from '~/components/atom/pagetitle.vue'
import ListBlock from '~/components/organism/list-block.vue'
import ListItemRanking from '~/components/molecule/list-item--ranking.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Ranking",
  components: {
    CategoryMenu,
    PageTitle,
    ListBlock,
    ListItemRanking
  },
  head: {
    bodyAttrs: {
      class: 'p-ranking'
    }
  },
  methods: {
     ...mapActions('pages/rankings',['getRankingPosts']),
     ...mapActions('shared/articles',['getOverviewPosts'])
  },
  computed:{
    ...mapState("shared/articles",{
      featureds: state => state.featured,
      hot_topics: state => state.hot_topic,
      editors_picks: state => state.editors_pick,
      latests: state => state.latest
    }),
    ...mapState("pages/rankings",{
      rankings_view: state => state.rankings_view,
      rankings_votes: state => state.rankings_vote
    })
  },
  async asyncData({ store }) {
    await store.dispatch('shared/articles/getOverviewPosts')
    await store.dispatch('pages/rankings/getRankingPosts')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>