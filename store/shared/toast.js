export default {
    namespaced: true,
    state: () => ({
        isShow: false
    }),
    actions:{
        showToast({commit,state}){
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
        }
    }
}