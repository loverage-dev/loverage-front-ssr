<template>
    <div :class="[isSelectOpt1? 'a-your-answer' : 'b-your-answer']">
       {{ content }}
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    content: {
      type: String,
      default: ""
    },
  },
  name: "YourAnswer",
  computed:{
      ...mapGetters("shared/post-comment", {
        isSelectOpt1:'isSelectOpt1',
    }),
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