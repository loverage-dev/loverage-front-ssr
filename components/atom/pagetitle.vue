<template>
    <div class="a-pagetitle">
        <div class="a-pagetitle__inner">{{ pageTitle }}</div>
    </div>
</template>


<script>
export default {
  name: "PageTitle",
  props: {
    pageTitle: {
      type: String,
      default: 'No Title'
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