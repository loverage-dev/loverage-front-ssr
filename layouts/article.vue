<template>
  <div class="t-wrapper">
    <!-- <Loading /> -->
    <Header />
    <nuxt />
    <PostFormArea />
    <Footer />
  </div>
</template>

<script>
//import Loading from '~/components/atom/loading.vue'
import Header from '~/components/organism/header.vue'
import Footer from '~/components/organism/footer.vue'
import PostFormArea from '~/components/organism/post-form-area.vue'

export default {
  components: {
    //Loading,
    Header,
    Footer,
    PostFormArea
  }
}
</script>

<style>
</style>
