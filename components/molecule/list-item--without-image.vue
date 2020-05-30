<template>

  <a href="" v-if="$store.state.top_feature_special">
    <div class="m-list-item">
      <div class="m-list-item__right">
        <h6 class="m-list-item__title">{{ $store.state.top_feature_special.content }}</h6>
        <div class="m-list-item__info">
            <a href="" class="a-tag a-tag--category">{{ $store.state.top_feature_special.category }}</a>
            <Likes :count="$store.state.top_feature_special.ref_count" />
            <Views :count="$store.state.top_feature_special.ref_count" />
        </div>
      </div>
    </div>
  </a>

</template>


<script>
import Likes from '~/components/atom/likes.vue'
import Views from '~/components/atom/views.vue'

export default {
  name: "ListItemWithoutImage",
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
      Likes,
      Views
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>