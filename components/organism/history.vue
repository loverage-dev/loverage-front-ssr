<template>

<div class="o-history" v-show="isShow">
  <div class="o-history__heading">あなたの相談履歴（最新5件）</div>
  <ul class="o-history__o-historylist" v-show="posts.length != 0">
    <li class="o-history__list-item" v-for="post in posts" v-bind:key="post.id">
      <nuxt-link 
        :to="{
          path: encodeURI(`/article/${ post.id }`)
        }">
        <time class="o-history__list-item-date">{{ post.created_at|format_date }}</time>
        <div class="o-history__list-item-title">{{ post.title }}</div>
      </nuxt-link>
    </li>
  </ul>
  <ul class="o-history__o-historylist">
    <li class="o-history__list-item-null" v-show="posts.length == 0">あなたはまだ相談していないようです。</li>
  </ul>
</div>

</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "History",
  props: {},
  data() {
    return {};
  },
  computed:{
      ...mapState("shared/storage",{
        posts: state => state.myPosts.slice().reverse()
      }),
      ...mapState("shared/history",{
        isShow: state => state.isShow
      })
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
.o-history{
  position: absolute;
  right: 0;
}
</style>