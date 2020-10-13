<template>

  <client-only>
    <nuxt-link
      :to="{
        path: encodeURI(`/article/${article.id}`),
      }"
    >
    <client-only>
      <div class="m-list-item">
        <div class="m-list-item__left">
          <IconEyeCatching
            :age="article.user_age"
            :sex="article.user_sex"
            :tag="article.img_tag"
            :fileNo="getRandomNo()"
          />
        </div>
        <Rank :rank="rank" />
        <div class="m-list-item__right">
          <h6 class="m-list-item__title">{{ article.content }}</h6>
          <div class="m-list-item__info">
            <nuxt-link
              class="a-tag a-tag--category"
              :to="{ path: encodeURI(`/category/${article.category}`) }"
            >
              {{ article.category }}
            </nuxt-link>
            <Likes :count="article.favorite" />
            <Views :count="article.ref_count" />
          </div>
        </div>
      </div>
    </client-only>
    </nuxt-link>
  </client-only>
</template>


<script>
const Likes = () => import("~/components/atom/likes.vue")
const Views = () => import("~/components/atom/views.vue")
const Rank = () => import("~/components/atom/rank.vue")
const IconEyeCatching = () => import("~/components/atom/icon-eye-catching.vue")

export default {
  name: "ListItemRanking",
  props: {
    article: {
      type: Object,
      default: null,
    },
    rank: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  created: function () {},
  mounted: function () {},
  destroyed: function () {},
  components: {
    Likes,
    Views,
    Rank,
    IconEyeCatching,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>