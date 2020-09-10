<template>
    <client-only>
      <nuxt-link 
        :to="{
          path: encodeURI(`/article/${ article.id }`)
        }">
      <div class="m-list-item">
          <div class="m-list-item__left"><img src="~assets/images/dammy-thumbnail.jpg" alt=""></div>
          <div class="m-list-item__right">
          <h6 class="m-list-item__title">{{ article.content }}</h6>
          <div class="m-list-item__info">
              <nuxt-link 
                class="a-tag a-tag--category"
                :to="{ path: encodeURI(`/category/${ article.category }`)}">
                {{ article.category }}
              </nuxt-link>
              <Likes :count="article.favorite" />
              <Views :count="article.ref_count" />
          </div>
          </div>
      </div>
      </nuxt-link>
    </client-only>

</template>


<script>
import Likes from '~/components/atom/likes.vue'
import Views from '~/components/atom/views.vue'

export default {
  name: "ListItem",
  props: {
    article: {
      type: Object,
      default: null
    }
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