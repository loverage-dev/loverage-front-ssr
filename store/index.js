// export const state = () =>({
//   // loading: false,
//   //   confirming: false,
//   //   deleting: false,
//   //   posting:false,
//   //   toasting: false,
//   //   toastingComment: false,
//   //   showToast: false,
//   //   showToastComment: false,
//   //   showHistory: false,
//   //   post_input: {
//   //     isChanged: false,
//   //     age: "e_20s",
//   //     sex: "f",
//   //     content: "",
//   //     opt1: "",
//   //     opt2: "",
//   //     tag_list: "",
//   //     img_base64: ""
//   //   },
//   //   hasError_content: false,
//   //   msgError_content: "",
//   //   hasError_options: false,
//   //   msgError_options: "",
//   //   hasError_sex: false,
//   //   hasError_age: false,
//   //   msgError_sex_age: "",
//   //   canPost: false,
//   //   post_data: null,
//     top_feature_special: null,
//     top_feature_normal: null,
//     womens_topic: null,
//     mens_topic: null,
//     ranking_view: null,
//     latest: null,
//     featured: null,
//     featured_sp: null,
//     hot_topic: null,
//     editors_pick: null,
//     others_1: null,
//     others_2: null,
//     rankings_view: null,
//     rankings_vote: null 
// })
// export const mutations = {
//   setLoading(state, payload) {
//     state.loading = payload;
//   },
//   setPostConfirming(state, payload) {
//     state.confirming = payload;
//   },
//   setDeleteConfirming(state, payload) {
//     state.deleting = payload;
//   },
//   setPosting(state, payload) {
//     state.posting = payload;
//   },
//   setToasting(state, payload) {
//     state.toasting = payload;
//   },
//   setToastingComment(state, payload) {
//     state.toastingComment = payload;
//   },
//   setShowToast(state, payload) {
//     state.showToast = payload;
//   },
//   setShowToastComment(state, payload) {
//     state.showToastComment = payload;
//   },
//   setShowHistory(state, payload) {
//     state.showHistory = payload;
//   },
//   setTopFeatureSpecial(state, payload){
//     state.top_feature_special = payload;
//   },
//   setTopFeatureNormal(state, payload){
//     state.top_feature_normal = payload;
//   },
//   setWomensTopic(state, payload){
//     state.womens_topic = payload;
//   },
//   setMensTopic(state, payload){
//     state.mens_topic = payload;
//   },
//   setRankingView(state, payload){
//     state.ranking_view = payload;
//   },
//   setRankingsView(state, payload){
//     state.rankings_view = payload;
//   },
//   setRankingsVote(state, payload){
//     state.rankings_vote = payload;
//   },
//   setLatest(state, payload){
//     state.latest = payload;
//   },
//   setFeatured(state, payload){
//     state.featured = payload;
//     console.log(JSON.stringify(payload))
//   },
//   setFeaturedSP(state, payload){
//     state.featured_sp = payload;
//   },
//   setHotTopic(state, payload){
//     state.hot_topic = payload;
//   },
//   setEditorsPick(state, payload){
//     state.editors_pick = payload;
//   },
//   setOthers1(state, payload){
//     state.others_1 = payload;
//   },
//   setOthers2(state, payload){
//     state.others_2 = payload;
//   },
//   // setPostData(state){
//   //   let jsonObj = new Object();
//   //   if (state.post_input.age != "") jsonObj.age = state.post_input.age;
//   //   if (state.post_input.sex != "") jsonObj.sex = state.post_input.sex;
//   //   if (state.post_input.content != "") jsonObj.content = state.post_input.content;
//   //   if (state.post_input.opt1 != "") jsonObj.opt1 = state.post_input.opt1;
//   //   if (state.post_input.opt2 != "") jsonObj.opt2 = state.post_input.opt2;
//   //   if (state.post_input.img_base64 != "") jsonObj.img_base64 = state.post_input.img_base64;
//   //   let tags = this.state.post_input.tag_list.split(" ");
//   //   let arrTag = [];
//   //   tags.forEach(tag => {
//   //     let t = tag.trim();
//   //     if (t.startsWith("#")) {
//   //       t = t.slice(1);
//   //       arrTag.push(t);
//   //     }
//   //   });
//   //   if (state.post_input.tag_list != "") jsonObj.tag_list = arrTag;
//   //   state.post_data = jsonObj;
//   // },
//   // resetPostData(state){
//   //   state.post_input.age = "e_20s"
//   //   state.post_input.sex = "f"
//   //   state.post_input.content = ""
//   //   state.post_input.opt1 = ""
//   //   state.post_input.opt2 = ""
//   //   state.post_input.tag_list = ""
//   //   state.post_input.img_base64 = ""
//   //   state.post_input.isChanged = false
//   // },
//   // changeInputState(state, payload){
//   //   state.post_input.isChanged = payload;
//   // },
//   // setInputValue(state, payload){
//   //   Vue.set(state.post_input, payload.key, payload.value)
//   // },
//   // chkErrors(state){
//   //   // 内容チェック
//   //   if(state.post_input.content == ""){
//   //     state.hasError_content = true;
//   //     state.msgError_content = "画像ファイルの添付以外は入力が必須です。"
//   //   }else{
//   //     state.hasError_content = false;
//   //     state.msgError_content = ""
//   //   }
//   //   // アリナシチェック
//   //   if(state.post_input.opt1 != "" && state.post_input.opt2 != "" && state.post_input.opt1 == state.post_input.opt2){
//   //     state.hasError_options = true;
//   //     state.msgError_options = "選択肢１/選択肢２は異なる値を入力してください。"
//   //   }else{
//   //     state.hasError_options = false;
//   //     state.msgError_options = ""
//   //   }
//   //   // 性別・年代チェック
//   //   if (state.post_input.sex == "" && state.post_input.age != "") {
//   //     state.hasError_sex = true;
//   //     state.hasError_age = false;
//   //     state.msgError_sex_age = "性別を選択してください。";
//   //   } else if (state.post_input.sex != "" && state.post_input.age == "") {
//   //     state.hasError_sex = false;
//   //     state.hasError_age = true;
//   //     state.msgError_sex_age = "年代を選択してください。";
//   //   } else if ( state.post_input.sex == "" && state.post_input.age == "") {
//   //     state.hasError_sex = true;
//   //     state.hasError_age = true;
//   //     state.msgError_sex_age = "性別・年代を選択してください。";
//   //   } else{
//   //     state.hasError_sex = false;
//   //     state.hasError_age = false;
//   //     state.msgError_sex_age = "";
//   //   }
//   // },
//   // chkCanPost(state){
//   //   if(state.post_input.content == ""){
//   //     state.canPost = false;
//   //   }else if(state.post_input.opt1 != "" && state.post_input.opt2 != "" && state.post_input.opt1 == state.post_input.opt2){
//   //     state.canPost = false;
//   //   }else if (state.post_input.sex == "" && state.post_input.age != "") {
//   //     state.canPost = false;
//   //   } else if (state.post_input.sex != "" && state.post_input.age == "") {
//   //     state.canPost = false;
//   //   } else if ( state.post_input.sex == "" && state.post_input.age == "") {
//   //     state.canPost = false;
//   //   } else{
//   //     state.canPost = true;
//   //   }
//   // },
//   // resetErrors(state){
//   //   state.hasError_content = false;
//   //   state.msgError_content = "";
//   //   state.hasError_options = false;
//   //   state.msgError_options = "";
//   //   state.hasError_sex = false;
//   //   state.hasError_age = false;
//   //   state.msgError_sex_age = "";
//   //   state.canPost = false;
//   // }
// }

// // export const actions = {
// //   doUpdateInputValue({commit}, payload) {
// //     commit('setInputValue', payload)
// //   },
// //   doChkErrors({commit}){
// //     commit("chkErrors")
// //   },
// //   doChkCanPost({commit}){
// //     commit("chkCanPost")
// //   }
// // }

// // export const getters = {
// //   inputValues(state) { return state.post_input },
// //     toasting(state) { return state.toasting },
// //     toastingComment(state) { return state.toastingComment },
// //     loading(state) { return state.loading },
// //     showHistory(state) { return state.showHistory },
// //     error_content(state) { return state.hasError_content },
// //     error_content_msg(state) { return state.msgError_content },
// //     error_options(state) { return state.hasError_options },
// //     error_options_msg(state) { return state.msgError_options },
// //     error_sex(state) { return state.hasError_sex },
// //     error_age(state) { return state.hasError_age },
// //     error_sex_age_msg(state) { return state.msgError_sex_age },
// //     canPost(state){ return state.canPost }
// // }