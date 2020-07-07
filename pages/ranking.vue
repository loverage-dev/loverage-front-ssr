<template>
  <div class="t-contents t-not-article-not-index">
    <CategoryMenu />
    <PageTitle  :pageTitle="'Ranking'"/>
    <div class="t-desktop-one-column">
      <div class="t-desktop-one-column__inner">
        <ul class="p-ranking__tabs">
            <li class="p-ranking__tabs-item" :class="{ 'is-active': mode === 'view' }">
              <nuxt-link 
                :to="{ path: encodeURI('/ranking/')}" 
                @click.native="toRankingView()">
                閲覧数
              </nuxt-link>
            </li>
            <li class="p-ranking__tabs-item" :class="{ 'is-active': mode === 'likes' }">
            <nuxt-link 
              :to="{ path: encodeURI('/ranking/')}"
              @click.native="toRankingLikes()">
              いいね数
            </nuxt-link>
            </li>
        </ul>
        <div class="o-list">
            <client-only>
              <ListItemRanking 
                :article="article" 
                :rank="index + 1" 
                v-for="(article,index) in rankings" 
                v-bind:key='article.id' />
            </client-only>
        </div>
        <nuxt-link 
          v-if="mode === 'view'" 
          :to="{ path: encodeURI('/ranking/')}" 
          @click.native="toRankingLikes()">
          <button class="a-button-secondary">いいね数ランキングも見る</button>
        </nuxt-link>
        <nuxt-link 
          v-if="mode === 'likes'"
          :to="{ path: encodeURI('/ranking/')}"
          @click.native="toRankingView()">
          <button class="a-button-secondary">閲覧数ランキングも見る</button>
        </nuxt-link>
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
     ...mapActions('pages/rankings',[
            'getRankingPosts',
            'toRankingView',
            'toRankingLikes']),
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
      rankings: state => {
        if(state.mode === 'view'){
          return state.rankings_view
        }else{
          return state.rankings_vote
        }
      },
      mode: state => state.mode
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