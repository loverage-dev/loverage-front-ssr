export default async ({ store, app }) => {
    app.router.afterEach((to, from) => {
      // ページ遷移ごとに行いたい処理
      store.dispatch('shared/search-bar/closeSearchBar')
      store.dispatch('shared/modal/closeModal')
    });
  };