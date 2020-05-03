<template>

    <div class="m-contents-post">
        <div class="a-textfield m-contents-post__title">
            <input type="text" placeholder="タイトル">
        </div>
        <div class="a-textfield m-contents-post__contents">
            <textarea placeholder="相談内容"></textarea>
        </div>
        <!-- <div class="m-contents-post__file">
            <input type="file" accept="image/*">
        </div> -->
        <div class="a-textfield m-contents-post__hashtag">
            <input type="text" placeholder="#ハッシュタグ">
        </div>
    </div>

</template>

<script>

export default {
  name: "ContentsPost",
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
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>