<template>
  <div class="t-wrapper">
    <Header />
    <nuxt v-show="!$store.state.loading" />
    <PostFormArea />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organism/header.vue'
import Footer from '~/components/organism/footer.vue'
import CategoryMenu from '~/components/atom/category-menu.vue'
import KvItem from '~/components/molecule/kv-item.vue'
import PostFormArea from '~/components/organism/post-form-area.vue'

export default {
  components: {
    Header,
    Footer,
    CategoryMenu,
    KvItem,
    PostFormArea
  }
}
</script>

<style>
</style>
