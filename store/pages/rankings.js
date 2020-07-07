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
            [this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/ranking_view?limit=10`),
            this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/ranking_vote?limit=10`)]
          )
          .then(result => {
            let api1Result = result[0]
            let api2Result = result[1]
            commit("setRankingsView", api1Result.articles);
            commit("setRankingsVote", api2Result.articles);
          }
        )
      },
      toRankingView({commit}){
        commit("setViewMode")
      },
      toRankingLikes({commit}){
        commit("setLikesMode")
      }
    },
    mutations:{
      setRankingsView(state, data){
        state.rankings_view = data;
      },
      setRankingsVote(state, data){
        state.rankings_vote = data;
      },
      setViewMode(state){
        state.mode = 'view'
      },
      setLikesMode(state){
        state.mode = 'likes'
      }
    }
  }