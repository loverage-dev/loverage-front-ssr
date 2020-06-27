<template>
  <div class="t-wrapper">
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organism/header.vue'
import Footer from '~/components/organism/footer.vue'
import CategoryMenu from '~/components/atom/category-menu.vue'

export default {
  components: {
    Header,
    Footer,
    CategoryMenu,
  },
}
</script>

<style>
</style>
