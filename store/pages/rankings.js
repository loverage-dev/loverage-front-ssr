export default {
  namespaced: true,
    state: () => ({
      mode: 'view'
    }),
    actions:{
      toRankingView({commit}){
        commit("setViewMode")
      },
      toRankingFavorite({commit}){
        commit("setFavoriteMode")
      }
    },
    mutations:{
      setViewMode(state){
        state.mode = 'view'
      },
      setFavoriteMode(state){
        state.mode = 'favorite'
      }
    }
  }