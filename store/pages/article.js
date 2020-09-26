export default {
    namespaced: true,
    state: () => ({
        //記事詳細データ
        article:null,
        answerProgress: 1,
        comments:{
          page: 0,
          dispItemSize: 2,
          data: null
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
        return state.comments.data.slice(0, startPage + state.comments.dispItemSize);
      },
      isEndPage: (state) => {
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
        //データを設定
        commit('setArticle', res.article)
        commit('setCommentData', res.article.comments.contents)
      },
      async getArticleNoRef ({commit, dispatch}, {articleId}) {
        const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/articles/${ articleId }/noref`)
        //データを設定
        commit('setArticle', res.article)
        commit('setCommentData', res.article.comments.contents)
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
      },
      doUpdateAnswerProgress({commit}, data){
        commit('setAnswerProgress', data.answerProgress)
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
      setCommentData(state, data){
        //ディープコピー
        const commentsCloned = [...data]
        // お気に入りの高い順にソート
        const listSorted = commentsCloned.sort((a,b) => {return (a.stars < b.stars ? 1 : -1)})
        // opt1/opt2の回答をそれぞれ配列化
        let listSelectedOpt1 = listSorted.filter((x) => { return (x.selected_opt == 'opt1') })
        let listSelectedOpt2 = listSorted.filter((x) => { return (x.selected_opt == 'opt2') })
        let resultList = []
        // // 各配列の長さの最小数だけループ
        let l = Math.min(listSelectedOpt1.length, listSelectedOpt2.length)
        for (let i = 0;i < l; i++) {
            resultList.push(listSelectedOpt1[i], listSelectedOpt2[i])
          }
        resultList.push(...listSelectedOpt1.slice(l), ...listSelectedOpt2.slice(l))
        state.comments.data = resultList;
      }
    }
  }