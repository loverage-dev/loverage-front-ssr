<template>
<div class="o-post-form-modal" :class="{ 'is-visible': isShow }">
  <div class="o-post-form-modal__close" @click="closeModal()">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" transform="rotate(180 12 12)" fill="black"/>
    <path d="M14.5667 16.3781L10.1889 12.0004L14.5667 7.62258L13.3889 6.4448L7.83338 12.0004L13.3889 17.5559L14.5667 16.3781Z" fill="white"/>
    </svg>
  </div>
  <PostFormArea />
</div>

</template>


<script>
import PostFormArea from '~/components/organism/post-form-area.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "PostFormModal",
  props: {},
  data() {
    return {};
  },
  computed:{
      ...mapState("shared/modal",{
        isShow: state => state.isShow
      })
  },
  methods: {
    closeModal(){
      this.$store.dispatch('shared/modal/closeModal')
    }
  },
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {
      PostFormArea
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>