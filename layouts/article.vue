<template>
  <div class="t-wrapper">
    <Header />
    <nuxt />
    <PostFormArea />
    <Footer />
    <Dialog />
    <Toast />
  </div>
</template>

<script>
import Header from '~/components/organism/header.vue'
import Footer from '~/components/organism/footer.vue'
import PostFormArea from '~/components/organism/post-form-area.vue'
import PostFormModal from '~/components/organism/post-form-modal.vue'
import Dialog from '~/components/molecule/dialog.vue'
import Toast from '~/components/atom/toast.vue'

export default {
  components: {
    Header,
    Footer,
    PostFormArea,
    PostFormModal,
    Dialog,
    Toast
  }
}
</script>

<style>
</style>
