<template>
    <div :class="[isSelectedOpt1? 'a-your-answer' : 'b-your-answer']">
       {{ content }}
    </div>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  props: {
    selectedOpt: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
  },
  name: "YourAnswer",
  data() {
    return {
      isSelectedOpt1: false,
    };
  },
  created: function(){
    },
  mounted: function(){
    this.isSelectedOpt1 = (this.selectedOpt == 'opt1')
    
  },
  destroyed: function(){
  },
  components: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>