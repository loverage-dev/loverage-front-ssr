<template>
    <div class="a-avatar" v-html="avatar"></div>
</template>


<script>
export default {
  name: "Avater",
  props: {
    sex: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed:{
    avatar: function(){
      switch (this.sex){
        case 'f':
          return "&#x1f469;&#x1f3fb;"
        case 'm':
          return "&#x1f9d1;&#x1f3fb;"
        case 'o':
          return "&#x1f603;"
        default:
          return "&#x1f603;"
      }
    }
  },
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>