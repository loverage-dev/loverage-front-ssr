export default {
    namespaced: true,
    state: () => ({
        article:null,         //記事詳細
    }),
    actions:{
      /********************************************
       * トップページ記事の一括取得
       ********************************************/
      async getArticle ({commit, dispatch}, {articleId}) {
        const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles/${ articleId }`)

        //データを設定
        commit('setArticle', res.article)
      }
    },
    mutations:{
      setArticle(state, data){
        state.article = data;
      }
    }
  }