<template>
    <div class="m-search-bar" v-show="isShow">
    <div class="m-search-bar__icon"><img src="~assets/images/icons/magnifier.svg" alt="虫眼鏡"></div>
    <form action="" class="m-search-bar__form">
        <input type="text" class="m-search-bar__input" v-model="inputValue">
        <button type="button" name="" class="m-search-bar__submit" @click="search()">検索</button>
        <button type="button" name="" class="m-search-bar__cancel" @click="closeSeachBar()">キャンセル</button>
    </form>
    </div>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "SearchBar",
  props: {},
  data() {
    return {
      inputValue: ""
    };
  },
  computed:{
      ...mapState("shared/search-bar",{
        isShow: state => state.isShow
      })
  },
  methods:{
    search(){
      this.$router.push({ path: '/search', query: { keyword: this.inputValue }});
      this.inputValue = ""
      this.$store.dispatch('shared/search-bar/closeSearchBar')
    },
    closeSeachBar(){
      this.$store.dispatch('shared/search-bar/closeSearchBar')
    }
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