export default {
  namespaced: true,
    state: () => ({
      mode: 'view',
      rankings_view: null,
      rankings_vote: null,
      rankings_favorite: null
    }),
    actions:{
      async getRankingPosts ({commit}) {
          await Promise.all(
            [this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/ranking_favorite?limit=10`),
            this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/ranking_view?limit=10`)]
          )
          .then(result => {
            let api1Result = result[0]
            let api2Result = result[1]
            commit("setRankingFavorite", api1Result.articles);
            commit("setRankingsView", api2Result.articles);
          }
        )
      },
      toRankingView({commit}){
        commit("setViewMode")
      },
      toRankingFavorite({commit}){
        commit("setFavoriteMode")
      }
    },
    mutations:{
      setRankingsView(state, data){
        state.rankings_view = data;
      },
      setRankingsVote(state, data){
        state.rankings_vote = data;
      },
      setRankingFavorite(state, data){
        state.rankings_favorite = data;
      },
      setViewMode(state){
        state.mode = 'view'
      },
      setFavoriteMode(state){
        state.mode = 'favorite'
      }
    }
  }