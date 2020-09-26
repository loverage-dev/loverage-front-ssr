export default {
    namespaced: true,
    state: () => ({
        input:{
            selected_opt: "",
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
        },
        async doPostAnswer({ commit, state }, postId){
            const age = `${state.input.ageEorL}_${state.input.ageNum}s`
            const url = `${ process.env.API_BASE_URL }/api/v1/articles/${postId}/vote`
            const res = await this.$axios.$post(url, {
                vote: {
                  age: age,
                  sex: state.input.sex,
                  selected_opt: state.input.selected_opt
                }
            })
            return res
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