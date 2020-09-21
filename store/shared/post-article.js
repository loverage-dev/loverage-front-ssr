export default {
    namespaced: true,
    state: () => ({
        isChanged: false,
        canPost: false,
        formData:{
            title: "",          //タイトル
            age: "e_20s",       //年齢
            sex: "f",           //性別
            content: "",        //投稿内容
            opt1: "",           //選択肢１
            opt2: "",           //選択肢２
            tag_list: "",       //ハッシュタグリスト
            img_base64: "",     //画像Base64文字列
            category_id: ""     //カテゴリID
        },
        errors:{
            hasError_title: false,
            hasError_content: false,
            hasError_category_id: false,
            hasError_options: false,
            hasError_sex: false,
            hasError_age: false,
            msgError_title: "",
            msgError_content: "",
            msgError_category_id: "",
            msgError_options: "",
            msgError_sex_age: "",
        },
        postData: null,          //API送信用データ
        postData_id: ""
    }),
    getters: {
      formData: state => {
          return state.formData
      },
    },
    actions:{
    /**************************************************************
     * 投稿記事データの登録
     * ************************************************************/
    async doPostArticle({commit,state}){
        //送信データの設定
        commit('setPostData')
        //API送信
        const res = await this.$axios.$post(`${ process.env.API_BASE_URL }/api/v1/articles`, {
            post: state.postData
        })
        //登録済みIDの設定
        commit('setPostDataId', res.id)
    },
    /**************************************************************
     * formDataへの値設定
     * ************************************************************/
    doUpdateFormData({ commit }, payload) {
        switch(payload.key){
            case 'title':
                commit('setTitle',  payload.value)
                break;
            case 'content':
                commit('setContent',  payload.value)
                break;
            case 'age':
                commit('setAge',  payload.value)
                break;
            case 'sex':
                commit('setSex',  payload.value)
                break;
            case 'opt1':
                commit('setOpt1',  payload.value)
                break;
            case 'opt2':
                commit('setOpt2',  payload.value)
                break;
            case 'tag_list':
                commit('setTagList',  payload.value)
                break;
            case 'category_id':
                commit('setCategoryId',  payload.value)
                break;
        }
    },
    resetFormData({commit,state}){
        //入力データのリセット
        commit('setTitle',  "")
        commit('setContent', "")
        commit('setAge',  "e_20s")
        commit('setSex',  "f")
        commit('setOpt1',  "")
        commit('setOpt2',  "")
        commit('setTagList',  "")
        commit('setCategoryId', "")
        //変更済みフラグの削除
        commit('setIsChanged',false)
        commit('setCanPost', false)
        //エラーリセット
        commit('setHasErrorTitle', false)
        commit('setMsgErrorTitle', "")
        commit('setHasErrorContent', false)
        commit('setMsgErrorContent', "")
        commit('setHasErrorCategoryId', false)
        commit('setMsgErrorCategoryId', "")
        commit('setHasErrorOptions', false)
        commit('setMsgErrorOptions', "")
        commit('setHasErrorSex', false)
        commit('setHasErrorAge', false)
        commit('setMsgErrorSexAndAge', "")
    },
    chkChangedFormData({ commit,state }){
        //自由入力項目がから出なかった場合
        if(state.formData.title != "" 
        || state.formData.content != "" 
        || state.formData.tag_list != "" 
        || state.formData.opt1 != ""
        || state.formData.opt2 != ""
        || state.formData.category_id != ""){
            commit('setIsChanged', true)
            }else{
                commit('setIsChanged', false)
            }
    },
    chkCanPost({ commit,state }){
        //自由入力項目がから出なかった場合
        if(
            state.errors.hasError_title == false &&
            state.errors.hasError_content == false &&
            state.errors.hasError_category_id == false &&
            state.errors.hasError_options == false &&
            state.errors.hasError_sex ==  false &&
            state.errors.hasError_age == false
        ){
            commit('setCanPost', true)
        }else{
            commit('setCanPost', false)
        }
    },
    chkErrors({ commit,state }){
      //タイトルのチェック
      if(state.formData.title == ""){
        commit('setHasErrorTitle', true)
        commit('setMsgErrorTitle', "タイトルは入力が必須です。")
      }else{
        commit('setHasErrorTitle', false)
        commit('setMsgErrorTitle', "")
      }
      // 投稿内容のチェック
      if(state.formData.content == ""){
        commit('setHasErrorContent', true)
        commit('setMsgErrorContent', "質問内容は入力が必須です。")
      }else{
        commit('setHasErrorContent', false)
        commit('setMsgErrorContent', "")
      }
      // カテゴリーのチェック
      if(state.formData.category_id == ""){
        commit('setHasErrorCategoryId', true)
        commit('setMsgErrorCategoryId', "カテゴリーは選択が必須です。")
      }else{
        commit('setHasErrorCategoryId', false)
        commit('setMsgErrorCategoryId', "")
      }
      // 選択肢①②のチェック
      if(state.formData.opt1 != "" 
      && state.formData.opt2 != "" 
      && state.formData.opt1 == state.formData.opt2){
        commit('setHasErrorOptions', true)
        commit('setMsgErrorOptions', "選択肢１/選択肢２は異なる値を入力してください。")
      }else{
        commit('setHasErrorOptions', false)
        commit('setMsgErrorOptions', "")
      }
      // 性別・年代チェック
      if (state.formData.sex == "" 
      && state.formData.age != "") {
        commit('setHasErrorSex', true)
        commit('setHasErrorAge', false)
        commit('setMsgErrorSexAndAge', "性別を選択してください。")
      } else if (state.formData.sex != "" && state.formData.age == "") {
        commit('setHasErrorSex', false)
        commit('setHasErrorAge', true)
        commit('setMsgErrorSexAndAge', "年代を選択してください。")
      } else if ( state.formData.sex == "" && state.formData.age == "") {
        commit('setHasErrorSex', true)
        commit('setHasErrorAge', true)
        commit('setMsgErrorSexAndAge', "性別・年代を選択してください。")
      } else{
        commit('setHasErrorSex', false)
        commit('setHasErrorAge', false)
        commit('setMsgErrorSexAndAge', "")
      }
        }
    },
    mutations:{
        /**************************************************************
         * 変更済みフラグの設定
         * ************************************************************/
        setIsChanged(state, data){
            state.isChanged = data;
        },
        /**************************************************************
         * 年齢データの設定
         * ************************************************************/
        setAge(state, data){
            state.formData.age = data;
        },
        /**************************************************************
         * 性別データの設定
         * ************************************************************/
        setSex(state, data){
            state.formData.sex = data;
        },
        /**************************************************************
         * タイトルデータの設定
         * ************************************************************/
        setTitle(state, data){
            state.formData.title = data;
        },
        /**************************************************************
         * 投稿内容データの設定
         * ************************************************************/
        setContent(state, data){
            state.formData.content = data;
        },
        /**************************************************************
         * 選択肢１データの設定
         * ************************************************************/
        setOpt1(state, data){
            state.formData.opt1 = data;
        },
        /**************************************************************
         * 選択肢２データの設定
         * ************************************************************/
        setOpt2(state, data){
            state.formData.opt2 = data;
        },
        /**************************************************************
         * タグリストデータの設定
         * ************************************************************/
        setTagList(state, data){
            state.formData.tag_list = data;
        },
        /**************************************************************
         * 画像のBase64文字列データの設定
         * ************************************************************/
        setImgBase64(state, data){
            state.formData.img_base64 = data;
        },
        /**************************************************************
         * カテゴリIDデータの設定
         * ************************************************************/
        setCategoryId(state, data){
            state.formData.category_id = data;
        },
        setHasErrorTitle(state, data){
            state.errors.hasError_title = data;
        },
        setHasErrorContent(state, data){
            state.errors.hasError_content = data;
        },
        setHasErrorCategoryId(state, data){
            state.errors.hasError_category_id = data;
        },
        setHasErrorOptions(state, data){
            state.errors.hasError_options = data;
        },
        setHasErrorSex(state, data){
            state.errors.hasError_sex = data;
        },
        setHasErrorAge(state, data){
            state.errors.hasError_age = data;
        },
        setMsgErrorTitle(state, data){
            state.errors.msgError_title = data;
        },
        setMsgErrorContent(state, data){
            state.errors.msgError_content = data;
        },
        setMsgErrorCategoryId(state, data){
            state.errors.msgError_category_id = data;
        },
        setMsgErrorOptions(state, data){
            state.errors.msgError_options = data;
        },
        setMsgErrorSexAndAge(state, data){
            state.errors.msgError_sex_age = data;
        },
        setCanPost(state, data){
            state.canPost = data;
        },
        setPostDataId(state, data){
            state.postData_id = data;
        },
        /**************************************************************
         * API送信データの設定
         * ************************************************************/
        setPostData(state, data){
            let jsonObj = new Object();
            //タイトルの設定
            
            //投稿者の年齢設定
            if (state.formData.age != "") jsonObj.age = state.formData.age;
            
            //投稿者の性別設定
            if (state.formData.sex != "") jsonObj.sex = state.formData.sex;
            
            //質問内容の設定
            if (state.formData.content != "") jsonObj.content = state.formData.content;
            
            //選択肢項目の設定
            if (state.formData.opt1 != "") jsonObj.opt1 = state.formData.opt1;
            if (state.formData.opt2 != "") jsonObj.opt2 = state.formData.opt2;
            
            //画像のBese64文字列の設定
            if (state.formData.img_base64 != "") jsonObj.img_base64 = state.formData.img_base64;

            //カテゴリーIDの設定
            if (state.formData.category_id != "") jsonObj.category_id = state.formData.category_id;
            
            //ハッシュタグの設定
            let tags = state.formData.tag_list.split(" ");
            let arrTag = [];
            tags.forEach(tag => {
                let t = tag.trim();
                if (t.startsWith("#")) {
                t = t.slice(1);
                arrTag.push(t);
                }
            });
            
            //タグリストの設定
            if (state.tag_list != "") jsonObj.tag_list = arrTag;
            state.postData = jsonObj;
        }
    }
}