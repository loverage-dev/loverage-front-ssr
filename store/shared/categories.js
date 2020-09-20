export default {
  namespaced: true,
  state: () => ({
    categoryList: null
  }),
  actions:{
    async getCategoryList({commit, state}){
      try {
        if(state.categoryList != null) return;
        const res = await this.$axios.$get(`${ process.env.API_BASE_URL }/api/v1/category_list`)
        commit('setCategoryList', res.categories)              
      } catch (error) {
        console.log(error)
      }
   }
  },
  mutations:{
    setCategoryList(state, data){
      state.categoryList = data;
    }
  }
}