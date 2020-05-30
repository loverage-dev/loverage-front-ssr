<template>
    <div class="a-views"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00002 10.6667C9.47278 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47278 5.33333 8.00002 5.33333C6.52726 5.33333 5.33335 6.52724 5.33335 8C5.33335 9.47276 6.52726 10.6667 8.00002 10.6667Z" fill="#999999"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00002 13C11.3334 13 14.18 10.9267 15.3334 8C14.18 5.07333 11.3334 3 8.00002 3C4.66669 3 1.82002 5.07333 0.666687 8C1.82002 10.9267 4.66669 13 8.00002 13ZM8.00002 12.3333C5.04422 12.3333 2.50395 10.5516 1.38848 8C2.50395 5.44841 5.04422 3.66667 8.00002 3.66667C10.9558 3.66667 13.4961 5.44842 14.6116 8C13.4961 10.5516 10.9558 12.3333 8.00002 12.3333Z" fill="#999999"/>
    </svg>{{ count }}</div>
</template>


<script>
export default {
  name: "Views",
  props: {
    count: {
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