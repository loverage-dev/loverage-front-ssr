<template>

<div class="o-post-form-area">
  <div class="o-post-form-area__block">
    <div class="o-post-form-area__heading a-text-70 a-text--bold">相談してみる</div>
    <div class="o-post-form-area__description">恋愛に関する2択の相談を投稿してみましょう。</div>
    <form 
      action="" 
      class="o-post-form-area__form"
      v-on:change="validate()"
      v-on:submit.prevent="onSubmit">
      <div class="m-contents-post">
        <div
          class="a-textfield m-contents-post__title"
          :class="{ 'is-error': hasError_title}">
            <input
             type="text"
             placeholder="タイトル"
             v-bind:value="formData.title"
             v-on:input="updateInputValue($event, 'title')">
        </div>
        <div
        　class="a-textfield m-contents-post__contents"
          :class="{ 'is-error': hasError_content}">
            <textarea
            　placeholder="相談内容"
            　v-bind:value="formData.content"
              v-on:input="updateInputValue($event, 'content')"></textarea>
        </div>
        <!-- <div class="m-contents-post__file">
            <input type="file" accept="image/*">
        </div> -->
        <div class="a-textfield m-contents-post__hashtag">
            <input
             type="text"
             placeholder="#ハッシュタグ"
             v-bind:value="formData.tag_list"
             v-on:input="updateInputValue($event, 'tag_list')">
        </div>
    </div>

      <div class="o-post-form-area__error-text" v-if="hasError_title">
        {{ msgError_title }}
      </div>
      <div class="o-post-form-area__error-text" v-if="hasError_content">
        {{ msgError_content }}
      </div>
      <div class="a-label">回答の選択肢（未入力の場合はアリ/ナシ）</div>
      <div class="a-textfield o-post-form-area__yes"
          :class="{ 'is-error': hasError_options}">
        <input 
         type="text" 
         placeholder="選択肢１"
         v-bind:value="formData.opt1"
         v-on:input="updateInputValue($event, 'opt1')">
      </div>
      <div class="a-textfield o-post-form-area__no"
          :class="{ 'is-error': hasError_options}">
        <input
         type="text"
          placeholder="選択肢２"
          v-bind:value="formData.opt2"
          v-on:input="updateInputValue($event, 'opt2')">
      </div>

      <div class="o-post-form-area__error-text" v-if="hasError_options">
        {{ msgError_options }}
      </div>
      <div class="a-label">相談のカテゴリー</div>
      <div class="a-selectbox o-post-form-area__category"
          :class="{ 'is-error': hasError_category_id}">
        <select
          name="category"
          v-bind:value="formData.category_id"
          v-on:input="updateInputValue($event, 'category_id')"
         ><option value="">選択してください</option>
          <option 
            v-for="category in categoryList"
            v-bind:key="category.id" 
            v-bind:value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="o-post-form-area__error-text" v-if="hasError_category_id">
        {{ msgError_category_id }}
      </div>
      <div class="a-label">あなたの性別と年代</div>
      <div class="o-post-form-area__gender-year-block">
        <div class="a-selectbox o-post-form-area__gender">
          <select
           name="gender"
           v-bind:value="formData.sex"
           v-on:input="updateInputValue($event, 'sex')"
           >
            <option value="f">女性</option>
            <option value="m">男性</option>
            <option value="o">その他</option>
          </select>
        </div>
        <div class="a-selectbox o-post-form-area__year">
          <select
           name="age"
           v-bind:value="formData.age"
           v-on:input="updateInputValue($event, 'age')"
           >
            <option value="e_10s">10代前半</option>
            <option value="l_10s">10代後半</option>
            <option value="e_20s">20代前半</option>
            <option value="l_20s">20代後半</option>
            <option value="e_30s">30代前半</option>
            <option value="l_30s">30代後半</option>
            <option value="e_40s">40代前半</option>
            <option value="l_40s">40代後半</option>
            <option value="e_50s">50代前半</option>
            <option value="l_50s">50代後半</option>
            <option value="e_60s">60代前半</option>
            <option value="l_60s">60代後半</option>
          </select>
        </div>
      </div>
      <div class="o-post-form-area__submit-block">
        <div class="o-post-form-area__submit-block-terms"><nuxt-link to="/terms">利用規約</nuxt-link>に同意して</div>
        <button 
          class="a-button-primary"
          type="submit">投稿する</button>
      </div>
    </form>
  </div>
</div>

</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "PostFormArea",
  props: {},
  data() {
    return {};
  },
  computed:{
      ...mapState("shared/post-article",{
        age: state => state.formData.age,
        sex: state => state.formData.sex,
        content: state => state.formData.sex,
        opt1: state => state.formData.opt1,
        opt2: state => state.formData.opt2,
        tag_list: state => state.formData.tag_list,
        img_base64: state => state.formData.img_base64,
        canPost: state => state.canPost,
        category_id: state => state.formData.category_id,
        hasError_title: state => state.errors.hasError_title,
        hasError_content: state => state.errors.hasError_content,
        hasError_category_id: state => state.errors.hasError_category_id,
        hasError_options: state => state.errors.hasError_options,
        hasError_sex: state => state.errors.hasError_sex,
        hasError_age: state => state.errors.hasError_age,
        msgError_title: state => state.errors.msgError_title,
        msgError_content: state => state.errors.msgError_content,
        msgError_category_id: state => state.errors.msgError_category_id,
        msgError_options: state => state.errors.msgError_options,
        msgError_sex_age: state => state.errors.msgError_sex_age,
        postId: state => state.postData_id
      }),
      ...mapState("shared/categories",{
        categoryList: state => state.categoryList
      }),
    ...mapGetters({
      formData:'shared/post-article/formData'
    })
  },
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  methods:{
    validate: function() {
      //変更内容のストア反映
      this.$store.dispatch('shared/post-article/chkChangedFormData');
    },
    async onSubmit() {
      //入力値のエラーチェック
      this.$store.dispatch('shared/post-article/chkErrors');
      //投稿可能かチェック
      this.$store.dispatch('shared/post-article/chkCanPost');
      if(this.canPost){
        //記事のPOST送信
      　this.$store.dispatch('shared/post-article/doPostArticle')
      .then((res)=>{
        //入力値をリセット
        this.$store.dispatch('shared/post-article/resetFormData');
        this.$router.push({ path: `/article/${ res.id }`});
        this.$store.dispatch('shared/toast/showToast');
      })
      .finally(()=>{
        this.$store.dispatch('shared/modal/closeModal');
        this.$store.dispatch('shared/latest/getArticlesForce');
      });
      }
    },
    updateInputValue(event, item_key) {
      this.$store.dispatch('shared/post-article/doUpdateFormData', { key: item_key, value: event.target.value })
    },
  },
  async asyncData({ store }) {
    await store.dispatch('shared/categories/getCategoryList')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>