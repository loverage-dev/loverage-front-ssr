export default {
    namespaced: true,
      state: () => ({
        title: false
      }),
      actions:{
        doSetPageTitle({commit},{title}){
            commit('setTitle', title)
        },
        doSetSearchKeywordTitle({commit},{keyword}){
            commit('setTitle', `検索結果  -  ${ keyword }`)
        },
        doSetSearchHashTagTitle({commit},{tag}){
            commit('setTitle', `検索結果  -  #${ tag }`)
        },
        doSetCategoryTitle({commit},{categoryName}){
            commit('setTitle', `カテゴリー  -  ${ categoryName }`)
        }
      },
      mutations:{
        setTitle(state, data){
          state.title = data;
        }
      }
  }