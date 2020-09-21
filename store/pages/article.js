export default {
    namespaced: true,
    state: () => ({
        //記事詳細データ
        article:null,
        answerProgress: 1,
        comments:{
          page: 0,
          dispItemSize: 4,
        }
    }),
    getters: {
      calcVoteRate: state => {
        const op1 = state.article.votes.opt1_selected.amount;
        const op2 = state.article.votes.opt2_selected.amount;
        if (op2 < op1) {
          return (op2 / op1) * 100;
        } else {
          return (op1 / op2) * 100;
        }
      },
      isFullOpt1: state => {
        const op1 = state.article.votes.opt1_selected.amount;
        const op2 = state.article.votes.opt2_selected.amount;
        if (op2 <= op1) {
          return true;
        } else {
          return false;
        }
      },
      dipsItems: state => {
        const startPage = state.comments.page * state.comments.dispItemSize;
        return state.article.comments.contents.slice(0, startPage + state.comments.dispItemSize);
      },
      dipsItemsHidden: state => {
        const startPage = state.comments.page * state.comments.dispItemSize;
        const displayedArticles =  state.article.comments.contents.slice(0, startPage + state.comments.dispItemSize);
        const hiddenArticles = state.article.comments.contents.filter(item => 
          displayedArticles.indexOf(item) == -1
        );        
        return hiddenArticles
      },
      isEndPage: state => {
          return ((state.comments.page + 1) * state.comments.dispItemSize >= state.article.comments.contents.length);
      },
      pageCount: state => {
          return Math.ceil(state.article.comments.contents.length / state.comments.dispItemSize);
      }
    },
    actions:{
      /********************************************
       * トップページ記事の一括取得
       ********************************************/
      async getArticle ({commit, dispatch}, {articleId}) {
        const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles/${ articleId }`)
        console.log(res)
        //データを設定
        commit('setArticle', res.article)
      },
      countUpAnswerProgress({commit,state}){
        commit('setAnswerProgress', state.answerProgress + 1)
      },
      resetAnswerProgress({commit,state}){
        commit('setAnswerProgress', 1)
      },
      doVoteOpt1({ commit }){
        commit('incrementVoteOpt1')
      },
      doVoteOpt2({ commit }){
        commit('incrementVoteOpt2')
      },
      showNextPage({commit}){
        commit('countUpPage')
      },
      resetPageCount({commit}){
        commit('resetPageCount')
      }
    },
    mutations:{
      setArticle(state, data){
        state.article = data;
      },
      setAnswerProgress(state,data){
        state.answerProgress = data;
      },
      incrementVoteOpt1(state,data){
        state.article.votes.opt1_selected.amount += 1;
      },
      incrementVoteOpt2(state,data){
        state.article.votes.opt2_selected.amount += 1;
      },
      countUpPage(state){
          state.comments.page += 1;
      },
      resetPageCount(state){
          state.comments.page = 0;
      },
      setArticles(state, data){
          state.comments.articles = data;
      }
    }
  }