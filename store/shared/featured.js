export default {
    namespaced: true,
    state: () => ({
      articles: null,
      page: 0,
      dispItemSize: 5,
    }),
    getters: {
      dipsItems: state => {
        const startPage = state.page * state.dispItemSize;
        return state.articles.slice(0, startPage + state.dispItemSize);
      },
      dipsItemsHidden: state => {
        const startPage = state.page * state.dispItemSize;
        const displayedArticles =  state.articles.slice(0, startPage + state.dispItemSize);
        const hiddenArticles = state.articles.filter(item => 
          displayedArticles.indexOf(item) == -1
        );        
        return hiddenArticles
      },
      isEndPage: state => {
          return ((state.page + 1) * state.dispItemSize >= state.articles.length);
      },
      pageCount: state => {
          return Math.ceil(state.articles.length / state.dispItemSize);
      },
    },
    actions:{
      async getArticles ({commit, state}, params) {
        const res = (params)? 
            await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/featureds/random?limit=50&not=${params.apart_from_id}`) : 
            await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/featureds/random?limit=50`) 
        commit('setArticles', res.articles)
      },
      showNextPage({commit}){
        commit('countUpPage')
      },
      resetPageCount({commit}){
        commit('resetPageCount')
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
        }
    }
  }