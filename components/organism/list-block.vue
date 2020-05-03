<template>
    <div class="o-list-block">
  <h4 class="a-text-60 a-text--bold">回遊導線見出し</h4>
  <div class="o-list">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
  </div>
  <a href=""><button class="a-button-primary">もっと見る</button></a>
</div>
</template>


<script>
import ListItem from '~/components/molecule/list-item.vue'

export default {
  name: "ListBlock",
  props: {},
  data() {
    return {};
  },
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {
      ListItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>