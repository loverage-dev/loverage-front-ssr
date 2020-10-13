<template>
  <client-only>
    <nuxt-link 
      :to="{
        path: encodeURI(`/article/${ top.id }`)
      }">
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
              <Likes :count="top.favorite" />
              <Views :count="top.ref_count" />
          </div>
        </div>
      </div>
    </nuxt-link >
  </client-only>

</template>


<script>
const Likes = () => import('~/components/atom/likes.vue')
const Views = () => import('~/components/atom/views.vue')
import { mapState } from 'vuex'

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