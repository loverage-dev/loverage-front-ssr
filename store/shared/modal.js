export default {
    namespaced: true,
      state: () => ({
        isShow: false
      }),
      actions:{
        showModal({commit}){
            commit('setIsShow', true)
        },
        closeModal({commit}){          
            commit('setIsShow', false)
        }
      },
      mutations:{
        setIsShow(state, data){
          state.isShow = data;
        }
      }
  }