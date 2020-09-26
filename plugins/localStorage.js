import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'loverage',
    paths: [
        'shared.storage.myPosts',
        'shared.storage.myFavoritePosts',
        'shared.storage.myFavoriteComments',
        'shared.storage.myAnswers']  // localStorageに保存したいstoreを入れる
  })(store);
};