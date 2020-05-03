<template>
    <div class="m-search-bar">
    <div class="m-search-bar__icon"><img src="~assets/images/icons/magnifier.svg" alt="虫眼鏡"></div>
    <form action="" class="m-search-bar__form">
        <input type="text" class="m-search-bar__input">
        <button type="button" name="" class="m-search-bar__submit">検索</button>
        <button type="button" name="" class="m-search-bar__cancel">キャンセル</button>
    </form>
    </div>
</template>


<script>
export default {
  name: "SearchBar",
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