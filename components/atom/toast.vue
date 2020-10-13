<template>
  <transition name="fade">
    <div 
      class="a-toast show"
      v-if="isToastShow">{{ message }}</div>
  </transition>
</template>


<script>
import { mapState} from 'vuex'
export default {
  name: "Likes",
  props: {},
  data() {
    return {};
  },
  computed:{
    ...mapState("shared/toast",{
      isToastShow: state => state.isShow,
      message: state => state.message
    })
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
.show {
  display: block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .75s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>