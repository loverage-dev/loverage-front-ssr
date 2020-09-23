export default {
    namespaced: true,
    state: () => ({
        isShow: false,
        message: ""
    }),
    actions:{
        showToast({commit,state}, msg){
            commit('setMessage', msg);
            commit("setIsShow", false);
            setTimeout(()=>{
                commit("setIsShow", true);
                setTimeout(() => {
                    commit("setIsShow", false);
                }, 3000);
            }, 800)
        }
    },
    mutations:{
        setIsShow(state, data){
            state.isShow = data;
        },
        setMessage(state, data){
            state.message = data;
        }
    }
}