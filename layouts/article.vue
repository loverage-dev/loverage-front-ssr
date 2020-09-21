<template>
  <div class="t-wrapper">
    <Loading v-show="$store.state.loading" />
    <Header />
    <nuxt v-show="!$store.state.loading" />
    <PostFormArea />
    <Footer />
    <Dialog />
    <PostFormModal />
    <Toast />
  </div>
</template>

<script>
import Loading from '~/components/atom/loading.vue'
import Header from '~/components/organism/header.vue'
import Footer from '~/components/organism/footer.vue'
import PostFormArea from '~/components/organism/post-form-area.vue'
import PostFormModal from '~/components/organism/post-form-modal.vue'
import Dialog from '~/components/molecule/dialog.vue'
import Toast from '~/components/atom/toast.vue'

export default {
  components: {
    Loading,
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
