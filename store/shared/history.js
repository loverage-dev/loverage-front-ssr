export default {
    namespaced: true,
      state: () => ({
        isShow: false
      }),
      actions:{
        showHistory({commit}){
            commit('setIsShow', true)
        },
        closeHistory({commit}){          
            commit('setIsShow', false)
        }
      },
      mutations:{
        setIsShow(state, data){
          state.isShow = data;
        }
      }
  }