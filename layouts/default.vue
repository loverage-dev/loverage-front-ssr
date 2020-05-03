<template>
  <div class="t-wrapper">
    <!-- <Loading /> -->
    <Header />
    <!-- <Header /> -->
    <CategoryMenu />
    <KvItem />
    <nuxt />
    <PostFormArea />
    <Footer />
  </div>
</template>

<script>
//import Loading from '~/components/atom/loading.vue'
import Header from '~/components/organism/header.vue'
import Footer from '~/components/organism/footer.vue'
import CategoryMenu from '~/components/atom/category-menu.vue'
import KvItem from '~/components/molecule/kv-item.vue'
import PostFormArea from '~/components/organism/post-form-area.vue'

export default {
  components: {
    //Loading,
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
