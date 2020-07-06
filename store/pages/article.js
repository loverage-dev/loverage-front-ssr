export default {
    namespaced: true,
    state: () => ({
        article:null
    }),
    actions:{
      /********************************************
       * トップページ記事の一括取得
       ********************************************/
      async getArticle ({commit}, {articleId}) {
        const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles/${ articleId }`)
        commit('setArticle', res.article)
      }
    },
    mutations:{
      setArticle(state, data){
        state.article = data;
      }
    }
  }