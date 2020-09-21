<template>
  <nuxt-link 
    :to="{
      path: encodeURI(`/article/${ top.id }`)
    }">
      <div class="m-kv-item">
          <div class="m-kv-item__image-area">
            <img v-if="getDayOfWeek() == 'mon'" src="~assets/images/thumbnail/kv1.jpg" alt>
            <img v-if="getDayOfWeek() == 'tue'" src="~assets/images/thumbnail/kv2.jpg" alt>
            <img v-if="getDayOfWeek() == 'wed'" src="~assets/images/thumbnail/kv3.jpg" alt>
            <img v-if="getDayOfWeek() == 'thu'" src="~assets/images/thumbnail/kv4.jpg" alt>
            <img v-if="getDayOfWeek() == 'fri'" src="~assets/images/thumbnail/kv5.jpg" alt>
            <img v-if="getDayOfWeek() == 'sat'" src="~assets/images/thumbnail/kv6.jpg" alt>
            <img v-if="getDayOfWeek() == 'sun'" src="~assets/images/thumbnail/kv7.jpg" alt>
          </div>
          <client-only>
            <ListItemWithoutImage />
          </client-only>
      </div>
  </nuxt-link>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import ListItemWithoutImage from '~/components/molecule/list-item--without-image.vue'
export default {
  name: "KvItem",
  props: {},
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  computed:{
    ...mapState("shared/articles",{
      top: state => state.top_feature_special
    })
  },
  components: {
      ListItemWithoutImage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>