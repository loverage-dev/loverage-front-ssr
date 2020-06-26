export default {
    namespaced: true,
      state: () => ({
        articles_sub1: null,  //回遊動線記事１
        articles_sub2: null,  //回遊動線記事２
        articles_sub3: null,  //回遊動線記事３
        articles_sub4: null   //回遊動線記事４
      }),
      actions:{
        async getArticles({commit, dispatch, rootState}){
          
          //カテゴリーリスト未取得の場合はAPI発行
          if(!rootState.shared.categories.categoryList){
            await dispatch('shared/categories/getCategoryList', null, { root: true })
          }
          
          //サブ記事の取得
          await dispatch('shared/articles/getPickUps', null , { root: true })
  
          //データの取得 
          commit('setArticlesSub1', rootState.shared.articles.featured)
          commit('setArticlesSub2', rootState.shared.articles.hot_topic)
          commit('setArticlesSub3', rootState.shared.articles.editors_pick)
          commit('setArticlesSub4', rootState.shared.articles.latest)
        }
      },
      mutations:{
        setArticles(state, data){
          state.articles = data;
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