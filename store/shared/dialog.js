export default {
    namespaced: true,
      state: () => ({
        isShow: false
      }),
      actions:{
        showDialog({commit}){
            commit('setIsShow', true)
        },
        closeDialog({commit}){          
            commit('setIsShow', false)
        }
      },
      mutations:{
        setIsShow(state, data){
          state.isShow = data;
        }
      }
  }