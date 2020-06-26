export default {
  namespaced: true,
    state: () => ({
      articles: null,       //該当カテゴリーの記事
      description: "",      //該当カテゴリーの説明文
      articles_sub1: null,  //回遊動線記事１
      articles_sub2: null,  //回遊動線記事２
      articles_sub3: null   //回遊動線記事３
    }),
    actions:{
      async getCategories({commit, dispatch, rootState},{category}){
        
        //カテゴリーリスト未取得の場合はAPI発行
        if(!rootState.shared.categories.categoryList){
          await dispatch('shared/categories/getCategoryList', null, { root: true })
        }
        
        //カテゴリーの説明文を取得
        let target = rootState.shared.categories.categoryList.filter(c =>{
          return c.name == category;
        })
        
        //該当カテゴリーの記事を取得
        await dispatch('shared/articles/getCategoryPosts', {category: encodeURI(category)} , { root: true })
        //サブ記事の取得
        await dispatch('shared/articles/getPickUps', null , { root: true })

        //データの取得
        commit('setDescription', target[0].description)   
        commit('setArticles', rootState.shared.articles.categoryPosts)
        commit('setArticlesSub1', rootState.shared.articles.featured)
        commit('setArticlesSub2', rootState.shared.articles.hot_topic)
        commit('setArticlesSub3', rootState.shared.articles.editors_pick)
      }
    },
    mutations:{
      setArticles(state, data){
        state.articles = data;
      },
      setDescription(state, data){
        state.description = data;
      },
      setArticlesSub1(state, data){
        state.articles_sub1 = data;
      },
      setArticlesSub2(state, data){
        state.articles_sub2 = data;
      },
      setArticlesSub2(state, data){
        state.articles_sub2 = data;
      }
    }
}