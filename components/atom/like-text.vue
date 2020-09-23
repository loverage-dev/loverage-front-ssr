<template>
<div class="a-like-text"><span class="a-like-text__number">{{ count }}</span>いいね</div>
</template>


<script>
export default {
  name: "LikeText",
  props: {
    count: {
      type: Number,
      default: 0
    },
    id: {
      type: Number,
      default: 0
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
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>