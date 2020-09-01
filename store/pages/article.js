export default {
    namespaced: true,
    state: () => ({
        article:null,         //記事詳細
        articles_sub1: null,  //回遊動線記事１
        articles_sub2: null,  //回遊動線記事２
        articles_sub3: null,  //回遊動線記事３
        articles_sub4: null   //回遊動線記事４
    }),
    actions:{
      /********************************************
       * トップページ記事の一括取得
       ********************************************/
      async getArticle ({commit, dispatch, rootState}, {articleId}) {
        const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles/${ articleId }`)
        
        //サブ記事の取得
        await dispatch('shared/articles/getPickUps', null , { root: true })
        
        //データを設定
        commit('setArticle', res.article)
        commit('setArticlesSub1', rootState.shared.articles.featured)
        commit('setArticlesSub2', rootState.shared.articles.hot_topic)
        commit('setArticlesSub3', rootState.shared.articles.editors_pick)
        commit('setArticlesSub4', rootState.shared.articles.latest)
      }
    },
    mutations:{
      setArticle(state, data){
        state.article = data;
      },
      setArticlesSub1(state, data){
        state.articles_sub1 = data;
      },
      setArticlesSub2(state, data){
        state.articles_sub2 = data;
      },
      setArticlesSub3(state, data){
        state.articles_sub3 = data;
      },
      setArticlesSub4(state, data){
        state.articles_sub4 = data;
      }
    }
  }