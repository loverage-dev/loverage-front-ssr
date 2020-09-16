<template>

<div class="o-post-form-area">
  <div class="o-post-form-area__block">
    <div class="o-post-form-area__heading a-text-70 a-text--bold">相談してみる</div>
    <div class="o-post-form-area__description">恋愛に関する2択の相談を投稿してみましょう。</div>
    <form action="" class="o-post-form-area__form">
      <ContentsPost />
      <div class="a-label">回答の選択肢（未入力の場合はアリ/ナシ）</div>
      <div class="a-textfield o-post-form-area__yes">
        <input type="text" placeholder="プレースホルダー">
      </div>
      <div class="a-textfield o-post-form-area__no">
        <input type="text" placeholder="プレースホルダー">
      </div>
      <div class="a-label">相談のカテゴリー</div>
      <div class="a-selectbox o-post-form-area__category">
        <select name="name">
          <option value="A">選択肢A</option>
          <option value="B">選択肢B</option>
          <option value="O">選択肢C</option>
          <option value="D">選択肢D</option>
        </select>
      </div>
      <div class="a-label">あなたの性別と年代</div>
      <div class="o-post-form-area__gender-year-block">
        <div class="a-selectbox o-post-form-area__gender">
          <select name="name">
            <option value="female">女性</option>
            <option value="male">男性</option>
            <option value="other">その他</option>
          </select>
        </div>
        <div class="a-selectbox o-post-form-area__year">
          <select name="name">
            <option value="A">選択肢A</option>
            <option value="B">選択肢B</option>
            <option value="O">選択肢C</option>
            <option value="D">選択肢D</option>
          </select>
        </div>
      </div>
      <div class="o-post-form-area__submit-block">
        <div class="o-post-form-area__submit-block-terms"><nuxt-link to="/terms">利用規約</nuxt-link>に同意して</div>
        <button class="a-button-primary" type="submit">投稿する</button>
      </div>
    </form>
  </div>
</div>

</template>

<script>
import ContentsPost from '~/components/molecule/contents-post.vue'

export default {
  name: "PostFormArea",
  props: {},
  data() {
    return {};
  },
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {
      ContentsPost
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>