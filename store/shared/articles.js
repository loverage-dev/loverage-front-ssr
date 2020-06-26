export default {
  namespaced: true,
  state: () => ({
    top_feature_special: null,
    top_feature_normal: null,
    womens_topic: null,
    mens_topic: null,
    ranking_view: null,
    latest: null,
    featured: null,
    featured_sp: null,
    hot_topic: null,
    editors_pick: null,
    others_1: null,
    others_2: null,
    rankings_view: null,
    rankings_vote: null,
    categoryPosts: null
  }),
  actions:{
    /********************************************
     * トップページ記事の一括取得
     ********************************************/
    async getOverviewPosts ({commit}) {
      const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/overview`)
      commit('setTopFeatureSpecial', res.key_visual)
      commit("setLatest", res.latest.articles)
      commit("setFeatured", res.featured.articles)
      commit("setHotTopic", res.hot_topic.articles)
      commit("setEditorsPick", res.editors_picks.articles)
      commit("setOthers1", res.others_2.articles)
      commit("setOthers2", res.others_3.articles)
    },
    /********************************************
     * 指定のカテゴリー記事の取得
     ********************************************/
    async getCategoryPosts ({commit}, {category}) {
      const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles?category=${ category }`)
      commit('setCategoryPosts', res.articles)
    },
    /********************************************
     * ピックアップ記事（Featured/HotTopic/EditorsPick）の取得
     ********************************************/
    async getPickUps ({commit}) {
      await Promise.all(
        [
          this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/featureds?limit=10`),
          this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/hot_topics?limit=10`),
          this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/editors_picks?limit=10`)
        ]
      )
      .then(result => {
        let api1Result = result[0]
        let api2Result = result[1]
        let api3Result = result[2]
        commit("setFeatured", api1Result.articles)
        commit("setHotTopic", api2Result.articles)
        commit("setEditorsPick", api3Result.articles)
        }
      )
    }
  },
  mutations:{
    setTopFeatureSpecial(state, data){
      state.top_feature_special = data;
    },
    setLatest(state, data){
      state.latest = data;
    },
    setFeatured(state, data){
      state.featured = data;
    },
    setHotTopic(state, data){
      state.hot_topic = data;
    },
    setEditorsPick(state, data){
      state.editors_pick = data;
    },
    setOthers1(state, data){
      state.others_1 = data;
    },
    setOthers2(state, data){
      state.others_2 = data;
    },
    setCategoryPosts(state, data){
      state.categoryPosts = data;
    },
  }
}