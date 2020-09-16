export default {
    namespaced: true,
      state: () => ({
        isShow: false
      }),
      actions:{
        showSearchBar({commit}){
            commit('setIsShow', true)
        },
        closeSearchBar({commit}){          
            commit('setIsShow', false)
        }
      },
      mutations:{
        setIsShow(state, data){
          state.isShow = data;
        }
      }
  }