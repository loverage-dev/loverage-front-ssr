<template>
  <div class="o-list-block">
    <h4 class="a-text-60 a-text--bold">{{ title }}</h4>
      <div class="o-list">
          <ListItem 
            :title="title" 
            :article="article" 
            v-for="article in articles" 
            :key="article.id" />
          <ListItem 
            :title="title" 
            :article="article" 
            v-for="article in articlesHidden" 
            :key="'none-' + article.id"
            style="display: none;" />
      </div>
    <button v-on:click="seeMore" class="a-button-primary" v-if="!isEndPage">もっと見る</button>
  </div>
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
    articlesHidden: {
      type: Array,
      default: []
    },
    title:{
      type: String,
      default: ""
    },
    isEndPage:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    seeMore(){
      this.$emit('clicked')
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