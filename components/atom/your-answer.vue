<template>
    <div
     :class="{ 
       'a-your-answer': selectedOpt == 'opt1', 
       'b-your-answer': selectedOpt == 'opt2'}">
       {{ optContent(selectedOpt, opt1, opt2) }}
    </div>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "YourAnswer",
  props: {
    selectedOpt: {
      type: String,
      default: ""
    },
    opt1: {
      type: String,
      default: "アリ"
    },
    opt2: {
      type: String,
      default: "ナシ"
    }
  },
  data() {
    return {};
  },
  created: function(){
    },
  mounted: function(){
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