<template>
  <nuxt-link 
    :to="{
      path: encodeURI(`/article/${ article.id }`)
    }">
    <client-only>
      <div class="m-list-item">
          <div class="m-list-item__left">
            <IconEyeCatching
              :age="article.user_age" 
              :sex="article.user_sex"
              :tag="article.img_tag"
              :fileNo="getRandomNo()"/>
          </div>
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
    </client-only>
  </nuxt-link>

</template>


<script>
import Likes from '~/components/atom/likes.vue'
import Views from '~/components/atom/views.vue'
import IconEyeCatching from '~/components/atom/icon-eye-catching.vue'

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
      Views,
      IconEyeCatching
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>