<template>
    <div class="a-your-answer">{{ content }}</div>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Likes",
  props: {
    content: {
      type: String,
      default: ""
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