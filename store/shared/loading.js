export default {
    namespaced: true,
      state: () => ({
        loading: true
      }),
      actions:{
        start({commit}){
            commit('setLoading', true)
        },
        finish({commit}){          
            commit('setLoading', false)
        }
      },
      mutations:{
        setLoading(state, data){
          state.loading = data;
        }
      }
  }