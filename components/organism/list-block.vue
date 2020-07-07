<template>
  <client-only>
    <div class="o-list-block">
    <h4 class="a-text-60 a-text--bold">{{ title }}</h4>
      <div class="o-list">
          <ListItem 
            :title="title" 
            :article="article" 
            v-for="article in articles" 
            :key="article.id" />
      </div>
    <a href=""><button class="a-button-primary">もっと見る</button></a>
    </div>
  </client-only>
</template>


<script>
import ListItem from '~/components/molecule/list-item.vue'

export default {
  name: "ListBlock",
  props: {
    articles: {
      type: Array,
      default: []
    },
    title:{
      type: String,
      default: ""
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
  components: {
      ListItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>