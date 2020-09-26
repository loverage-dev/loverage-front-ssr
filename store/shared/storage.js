export default {
  namespaced: true,
  state: () => ({
      myPosts: [],
      myFavoritePosts: [],
      myFavoriteComments: [],
      myAnswers: []
  }),
  getters: {
    IsFavoritedPost: (state) => (id) => {
      if(Object.values(state.myFavoritePosts).some(el => el.id == id)){
          return true
      }else{
          return false
      }
    },
    IsFavoritedComment: (state) => (id) => {
      if(Object.values(state.myFavoriteComments).some(el => el.id == id)){
          return true
      }else{
          return false
      }
    },
    isAnsweredPost: (state) => (id) => {
      if(Object.values(state.myAnswers).some(el => el.id == id)){
          return true
      }else{
          return false
      }
    },
    selectedOpt: (state) => (id) => {
      const target = Object.values(state.myAnswers).find(el => el.id == id);
      if(target){
          return target.selected_opt
      }else{
          return ""
      }
    }
  },
  actions:{
    doAddMyPosts ({commit}, post) {
      commit('pushMyPosts', post)
    },
    doDelMyPosts ({commit}, postId) {
      commit('delMyPosts', postId)
    },
    doAddMyFavoritePosts ({commit}, post) {
      commit('pushMyFavoritePosts', post)
    },
    doDelMyFavoritePosts ({commit}, postId) {
      commit('delMyFavoritePosts', postId)
    },
    doAddMyFavoriteComments ({commit}, post) {
      commit('pushMyFavoriteComments', post)
    },
    doDelMyFavoriteComments ({commit}, postId) {
      commit('delMyFavoriteComments', postId)
    },
    doAddMyAnswers ({commit}, post) {
      commit('pushMyAnswers', post)
    },
    doDelMyAnswers ({commit}, postId) {
      commit('delMyAnswers', postId)
    },
    doFetchSaveData({commit, state}, postId){
      const target = state.myAnswers.find((data) => {
        return (data.id == postId);
      });
      return target;
    }
  },
  mutations:{
    pushMyPosts(state, data){
      state.myPosts.push(data)
    },
    delMyPosts(state, postId){
      state.myPosts.some(function(v, i){
          if (v.id==postId) state.myPosts.splice(i,1);
      });
    },
    pushMyFavoritePosts(state, data){
      state.myFavoritePosts.push(data)
    },
    delMyFavoritePosts(state, postId){
      state.myFavoritePosts.some(function(v, i){
          if (v.id==postId) state.myFavoritePosts.splice(i,1);
      });
    },
    pushMyFavoriteComments(state, data){
      state.myFavoriteComments.push(data)
    },
    delMyFavoriteComments(state, postId){
      state.myFavoriteComments.some(function(v, i){
        if (v.id==postId) state.myFavoriteComments.splice(i,1);
      });
    },
    pushMyAnswers(state, data){
      state.myAnswers.push(data)
    },
    delMyAnswers(state, postId){
      state.myAnswers.some(function(v, i){
        if (v.id==postId) state.myAnswers.splice(i,1);
      });
    }
  }
}