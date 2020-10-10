<template>
    <div class="a-pagetitle">
        <div class="a-pagetitle__inner">{{ title }}</div>
    </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: "PageTitle",
  created: function(){
    },
  computed:{
    ...mapState("shared/page-title",{
      title: state => state.title
    })
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