<template>

<div class="m-tag-list">
  <nuxt-link :to="{ path: '/search', query: { tag:tag }}" class="a-tag a-tag--tag" v-for="(tag,index) in tags" v-bind:key="index" >#{{tag}}</nuxt-link>
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