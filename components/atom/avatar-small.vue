<template>
    <span v-html="avatar"></span>
</template>


<script>
export default {
  name: "AvaterSmall",
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
          return "&#x1f469;"
        case 'm':
          return "&#x1f9d1;"
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