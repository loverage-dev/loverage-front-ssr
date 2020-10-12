export default {
  namespaced: true,
    state: () => ({
      // ========  記事データ　========
      articles: null,            //該当カテゴリーの記事
      articlesGrepped: null,     //絞り込み結果
      page: 0,
      dispItemSize: 6,
    }),
    actions:{
    async getArticlesByKeyword({commit, dispatch},{keyword}){
        if(keyword == undefined) return;
        const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles?keyword=${ keyword }`)
        //データの取得
        commit('setArticles', res.articles)
        commit('setArticlesGrepped', res.articles)
      },
      async getArticlesByTag({commit, dispatch},{tag}){
        if(tag == undefined) return;
        const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles?tag=${ tag }`)
        //データの取得
        commit('setArticles', res.articles)
        commit('setArticlesGrepped', res.articles)
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
      }
    }
}