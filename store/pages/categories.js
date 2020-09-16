import articles from "../shared/articles";
import article from "./article";

export default {
  namespaced: true,
    state: () => ({
      // ========  記事データ　========
      articles: null,            //該当カテゴリーの記事
      articlesGrepped: null,     //絞り込み結果
      description: "",           //該当カテゴリーの説明文
      articles_sub1: null,       //回遊動線記事１
      articles_sub2: null,       //回遊動線記事２
      articles_sub3: null,       //回遊動線記事３
      page: 0,
      dispItemSize: 6,
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

        //データの取得
        commit('setDescription', target[0].description)   
        commit('setArticles', rootState.shared.articles.categoryPosts)
        commit('setArticlesGrepped', rootState.shared.articles.categoryPosts)
        commit('setArticlesSub1', rootState.shared.articles.featured)
        commit('setArticlesSub2', rootState.shared.articles.hot_topic)
        commit('setArticlesSub3', rootState.shared.articles.editors_pick)
      },
      showNextPage({commit}){
        commit('countUpPage')
      },
      resetPageCount({commit}){
        commit('resetPageCount')
      },
      // 年齢・性別で絞り込み
      filterBy:({commit, state},{age,sex})=>{
        const articles = state.articles.filter(article => {
          if (sex === "" && age === "") return true
          if (sex === "") return article.user_age === age
          if (age === "") return article.user_sex === sex
          return article.user_sex === sex && article.user_age === age
        })
        commit('setArticlesGrepped', articles)
      }
    },
    getters: {
      dipsItems: state => {
        const startPage = state.page * state.dispItemSize;
        return state.articlesGrepped.slice(0, startPage + state.dispItemSize);
      },
      dipsItemsHidden: state => {
        const startPage = state.page * state.dispItemSize;
        const displayedArticles =  state.articlesGrepped.slice(0, startPage + state.dispItemSize);
        const hiddenArticles = state.articles.filter(item => 
          displayedArticles.indexOf(item) == -1
        );        
        return hiddenArticles
      },
      isEndPage: state => {
          return ((state.page + 1) * state.dispItemSize >= state.articlesGrepped.length);
      },
      pageCount: state => {
          return Math.ceil(state.articlesGrepped.length / state.dispItemSize);
      },
    },
    mutations:{
      countUpPage(state){
        state.page += 1;
      },
      resetPageCount(state){
        state.page = 0;
      },
      setArticles(state, data){
        state.articles = data;
      },
      setArticlesGrepped(state, data){
        state.articlesGrepped = data;
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
      setArticlesSub3(state, data){
        state.articles_sub3 = data;
      }
    }
}