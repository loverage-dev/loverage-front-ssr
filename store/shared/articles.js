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
      const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles?category=${ category }&limit=100`)
      commit('setCategoryPosts', res.articles)
    },
    /********************************************
     * 指定のカテゴリー記事の取得
     ********************************************/
    async getCategoryPostsByUserAttr ({commit}, {sex, age}) {
      let res = null;
      if(age == undefined) res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles?sex=${ sex }&limit=100`)
      if(sex == undefined) res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles?age=${ age }&limit=100`)
      if(age != undefined && sex != undefined) res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles?sex=${ sex }&age=${ age }&limit=100`)
      commit('setCategoryPosts', res.articles)
    },
    /********************************************
     * 記事のお気に入り登録
     ********************************************/
    async doFavoritePost ({commit}, post_id) {
      const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles/${ post_id }/favorite`)
      return res
    },
    /********************************************
     * 記事のお気に入り解除
     ********************************************/
    async doUnFavoritePost ({commit}, post_id) {
      const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles/${ post_id }/unfavorite`)
      return res
    },
    /********************************************
     * コメントのお気に入り登録
     ********************************************/
    async doFavoriteComment ({commit}, comment_id) {
      const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/comments/${ comment_id }/favorite`)
      return res
    },
    /********************************************
     * コメントのお気に入り解除
     ********************************************/
    async doUnFavoriteComment ({commit}, comment_id) {
      const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/comments/${ comment_id }/unfavorite`)
      return res
    },
    /********************************************
     * ピックアップ記事（Featured/HotTopic/EditorsPick/latest）の取得
     ********************************************/
    async getPickUps ({commit}) {
      await Promise.all(
        [
          this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/featureds?limit=10`),
          this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/hot_topics?limit=10`),
          this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/editors_picks?limit=10`),
          this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/latest?limit=10`)
        ]
      )
      .then(result => {
        let api1Result = result[0]
        let api2Result = result[1]
        let api3Result = result[2]
        let api4Result = result[3]
        commit("setFeatured", api1Result.articles)
        commit("setHotTopic", api2Result.articles)
        commit("setEditorsPick", api3Result.articles)
        commit("setLatest", api4Result.articles)
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