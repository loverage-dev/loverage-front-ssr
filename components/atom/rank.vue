<template>
<div class="a-rank">{{ rank }}</div>
</template>


<script>
export default {
  name: "Rank",
  props: {
    rank: {
      type: Number,
      default: 0
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>