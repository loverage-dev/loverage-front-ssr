export default {
  namespaced: true,
    state: () => ({
      // ========  記事データ　========
      articles: null,            //該当カテゴリーの記事
      articlesGrepped: null,     //絞り込み結果
      description: "",           //該当カテゴリーの説明文
      articles_sub1: null,       //回遊動線記事１
      articles_sub2: null,       //回遊動線記事２
      articles_sub3: null,       //回遊動線記事３
      page: 0,
      dispItemSize: 6,
    }),
    actions:{
      async getCategories({commit, dispatch, rootState},{category}){
         
        let funcArray = []

        switch (category) {
          case '女性':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f'} , { root: true }))
            break;
          case '男性':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm'} , { root: true }))
            break;
          case 'その他':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'o'} , { root: true }))
            break;
          case '10代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'e_10s'} , { root: true }))
            break;
          case '10代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'l_10s'} , { root: true }))
            break;
          case '20代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'e_20s'} , { root: true }))
            break;
          case '20代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'l_20s'} , { root: true }))
            break;
          case '30代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'e_30s'} , { root: true }))
            break;
          case '30代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'l_30s'} , { root: true }))
            break;
          case '40代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'l_40s'} , { root: true }))
            break;
          case '40代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'e_40s'} , { root: true }))
            break;
          case '50代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'e_50s'} , { root: true }))
            break;
          case '50代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'l_50s'} , { root: true }))
            break;
          case '60代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'e_60s'} , { root: true }))
            break;
          case '60代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {age: 'l_60s'} , { root: true }))
            break;
          case '女性10代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'e_10s'} , { root: true }))
            break;
          case '女性10代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'l_10s'} , { root: true }))
            break;
          case '女性20代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'e_20s'} , { root: true }))
            break;
          case '女性20代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'l_20s'} , { root: true }))
            break;
          case '女性30代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'e_30s'} , { root: true }))
            break;
          case '女性30代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'l_30s'} , { root: true }))
            break;
          case '女性40代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'e_40s'} , { root: true }))
            break;
          case '女性40代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'l_40s'} , { root: true }))
            break;
          case '女性50代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'e_50s'} , { root: true }))
            break;
          case '女性50代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'l_50s'} , { root: true }))
            break;
          case '女性60代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'e_60s'} , { root: true }))
            break;
          case '女性60代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'f', age: 'l_60s'} , { root: true }))
            break;
          case '男性10代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'e_10s'} , { root: true }))
            break;
          case '男性10代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'l_10s'} , { root: true }))
            break;
          case '男性20代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'e_20s'} , { root: true }))
            break;
          case '男性20代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'l_20s'} , { root: true }))
            break;
          case '男性30代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'e_30s'} , { root: true }))
            break;
          case '男性30代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'l_30s'} , { root: true }))
            break;
          case '男性40代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'e_40s'} , { root: true }))
            break;
          case '男性40代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'l_40s'} , { root: true }))
            break;
          case '男性50代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'e_50s'} , { root: true }))
            break;
          case '男性50代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'l_50s'} , { root: true }))
            break;
          case '男性60代前半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'e_60s'} , { root: true }))
            break;
          case '男性60代後半':
            funcArray.push(dispatch('shared/articles/getCategoryPostsByUserAttr', {sex: 'm', age: 'l_60s'} , { root: true }))
            break;
          default:
            funcArray.push(dispatch('shared/categories/getCategoryList', null, { root: true }))
            funcArray.push(dispatch('shared/articles/getCategoryPosts', {category: encodeURI(category)} , { root: true }))
            break;
          }
          await Promise.all(
            funcArray
          )
          .then(()=>{
            try{
              //カテゴリーの説明文を取得
              let target = rootState.shared.categories.categoryList.filter(c =>{
                return c.name == category;
              })
              commit('setDescription', target[0].description)   
            }
            catch{
              commit('setDescription', '')
            }
          })
          

        //データの取得
        commit('setArticles', rootState.shared.articles.categoryPosts)
        commit('setArticlesGrepped', rootState.shared.articles.categoryPosts)
        commit('setArticlesSub1', rootState.shared.articles.featured)
        commit('setArticlesSub2', rootState.shared.articles.hot_topic)
        commit('setArticlesSub3', rootState.shared.articles.editors_pick)
      },
      showNextPage({commit}){
        commit('countUpPage')
      },
      resetPageCount({commit}){
        commit('resetPageCount')
      },
      // 年齢・性別で絞り込み
      filterBy:({commit, state},{age,sex})=>{
        const articles = state.articles.filter(article => {
          if (sex === "" && age === "") return true
          if (sex === "") return article.user_age === age
          if (age === "") return article.user_sex === sex
          return article.user_sex === sex && article.user_age === age
        })
        commit('setArticlesGrepped', articles)
      }
    },
    getters: {
      dipsItems: state => {
        const startPage = state.page * state.dispItemSize;
        return state.articlesGrepped.slice(0, startPage + state.dispItemSize);
      },
      dipsItemsHidden: state => {
        const startPage = state.page * state.dispItemSize;
        const displayedArticles =  state.articlesGrepped.slice(0, startPage + state.dispItemSize);
        const hiddenArticles = state.articles.filter(item => 
          displayedArticles.indexOf(item) == -1
        );        
        return hiddenArticles
      },
      isEndPage: state => {
          return ((state.page + 1) * state.dispItemSize >= state.articlesGrepped.length);
      },
      pageCount: state => {
          return Math.ceil(state.articlesGrepped.length / state.dispItemSize);
      },
    },
    mutations:{
      countUpPage(state){
        state.page += 1;
      },
      resetPageCount(state){
        state.page = 0;
      },
      setArticles(state, data){
        state.articles = data;
      },
      setArticlesGrepped(state, data){
        state.articlesGrepped = data;
      },
      setDescription(state, data){
        state.description = data;
      },
      setArticlesSub1(state, data){
        state.articles_sub1 = data;
      },
      setArticlesSub2(state, data){
        state.articles_sub2 = data;
      },
      setArticlesSub3(state, data){
        state.articles_sub3 = data;
      }
    }
}