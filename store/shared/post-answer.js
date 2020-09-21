export default {
    namespaced: true,
    state: () => ({
        input:{
            selected_opt: "test",
            ageNum: "",
            ageEorL: "",
            sex: ""
        }
    }),
    actions:{
        doUpdateInput({ commit,state }, payload) {
            switch(payload.key){
                case 'selected_opt':
                    commit('setSelectedOpt',  payload.value)
                    break; 
                case 'ageNum':
                    commit('setAgeNum',  payload.value)
                    break; 
                case 'ageEorL':
                    commit('setAgeEorL',  payload.value)
                    break;
                case 'sex':
                    commit('setSex',  payload.value)
                    break;
            }
        },
        doResetInput({ commit }){

            commit('setSelectedOpt', "")
            commit('setAgeNum', "")
            commit('setAgeEorL', "")
            commit('setSex', "")
        }
    },
    mutations:{
      setSelectedOpt(state, data){
        state.input.selected_opt = data;
      },
      setAgeNum(state, data){
        state.input.ageNum = data;
      },
      setAgeEorL(state, data){
        state.input.ageEorL = data;
      },
      setSex(state, data){
        state.input.sex = data;
      }
    }
  }