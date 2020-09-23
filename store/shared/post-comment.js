export default {
    namespaced: true,
    state: () => ({
        canPost: false,
        input:{
            selected_opt: "",
            ageNum: "",
            ageEorL: "",
            sex: "",
            content: "",        // コメント内容
        }
    }),
    getters: {
        inputData: state => {
          return state.input
      },
    },
    actions:{
        doUpdateInput({ commit }, payload) {
            console.log(payload)
            switch(payload.key){
                case 'ageEorL':
                    commit('setAgeEorL',  payload.value)
                    break;
                case 'ageNum':
                    commit('setAgeNum',  payload.value)
                    break;
                case 'sex':
                    commit('setSex',  payload.value)
                    break;
                case 'selected_opt':
                    commit('setSelectedOpt',  payload.value)
                    break;
                case 'content':
                    commit('setContent',  payload.value)
                    break;
            }
        },
        chkCanPost({ commit,state }){
            //自由入力項目がから出なかった場合
            if(state.input.content != "" ){
                commit('setCanPost', true)
            }else{
                commit('setCanPost', false)
            }
        },
        resetInputData({commit}){
            commit('setSelectedOpt', "")
            commit('setAgeNum', "")
            commit('setAgeEorL', "")
            commit('setSex', "")
            commit('setIconId', "")
            commit('setContent', "")
        },
        async doPostComment({ commit, state }, postId){
            const age = `${state.input.ageEorL}_${state.input.ageNum}s`
            const url = `${ process.env.API_BASE_URL }/api/v1/articles/${postId}/comment`
            const res = await this.$axios.$post(url, {
                comment: {
                  age: age,
                  sex: state.input.sex,
                  selected_opt: state.input.selected_opt,
                  content: state.input.content,
                  icon_id: "&#x1f42f;"
                }
            })
            return res
        }
    },
    mutations:{
        setAgeNum(state, data){
            state.input.ageNum = data;
        },
        setAgeEorL(state, data){
            state.input.ageEorL = data;
        },
        setSex(state, data){
            state.input.sex = data;
        },
        setSelectedOpt(state, data){
            state.input.selected_opt = data;
        },
        setContent(state, data){
            state.input.content = data;
        },
        setIconId(state, data){
            state.input.icon_id = data;
        },
        setCanPost(state, data){
            state.canPost = data;
        }
    }
}