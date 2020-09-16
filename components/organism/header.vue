<template>

<header class="o-header">
  <div class="o-header__block">
    <div class="o-header__left">
      <div class="o-header__logo">
        <Logo />
      </div>
      <div class="o-header__description">2択の恋愛相談コミュニティ ラベレージ</div>
    </div>
    <div class="o-header__right">
      <div class="o-header__history-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="black"/>
        </svg>
      </div>
      <div class="o-header__search-button" @click="showSearchBar()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="black"/>
        <path d="M14.0833 13.1904H13.6131L13.4464 13.0297C14.0298 12.3512 14.3809 11.4702 14.3809 10.5119C14.3809 8.37496 12.6488 6.64282 10.5119 6.64282C8.375 6.64282 6.64285 8.37496 6.64285 10.5119C6.64285 12.6488 8.375 14.3809 10.5119 14.3809C11.4702 14.3809 12.3512 14.0297 13.0298 13.4464L13.1905 13.6131V14.0833L16.1667 17.0535L17.0536 16.1666L14.0833 13.1904ZM10.5119 13.1904C9.02976 13.1904 7.83333 11.994 7.83333 10.5119C7.83333 9.02973 9.02976 7.8333 10.5119 7.8333C11.994 7.8333 13.1905 9.02973 13.1905 10.5119C13.1905 11.994 11.994 13.1904 10.5119 13.1904Z" fill="white"/>
        </svg>
      </div>
      <SearchBar />
      <div class="o-header__post-button">
        <a @click="showModalForm()" class="a-button-mini">相談する</a>
      </div>
    </div>
  </div>
</header>

</template>


<script>
import Logo from '~/components/atom/logo.vue'
import SearchBar from '~/components/molecule/search-bar.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Header",
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
  methods:{
    showModalForm(){
      this.$store.dispatch('shared/modal/showModal')
    },
    showSearchBar(){
      this.$store.dispatch('shared/search-bar/showSearchBar')
    }
  },
  components: {
      Logo,
      SearchBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>