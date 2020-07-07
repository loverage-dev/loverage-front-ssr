<template>

  <a href="">
    <div class="m-list-item">
      <div class="m-list-item__right">
        <h6 class="m-list-item__title">{{ top.content }}</h6>
        <div class="m-list-item__info">
            <nuxt-link 
              class="a-tag a-tag--category"
              :to="{
                path: encodeURI(`/category/${ top.category }`)
              }">
              {{ top.category }}
            </nuxt-link>
            <Likes :count="top.ref_count" />
            <Views :count="top.ref_count" />
        </div>
      </div>
    </div>
  </a>

</template>


<script>
import Likes from '~/components/atom/likes.vue'
import Views from '~/components/atom/views.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "ListItemWithoutImage",
  components: {
      Likes,
      Views
  },
  computed:{
    ...mapState("shared/articles",{
      top: state => state.top_feature_special
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>