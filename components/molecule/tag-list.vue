<template>

<div class="m-tag-list">
  <a href="" class="a-tag a-tag--tag" v-for="(tag,index) in tags" v-bind:key="index" >#{{tag}}</a>
</div>

</template>


<script>
export default {
  name: "TagList",
  props: {
    tags: {
      type: Array,
      default: [null]
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>