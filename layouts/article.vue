<template>
  <div class="t-wrapper">
    <Loading v-if="loading" />
    <Header />
    <nuxt v-if="!loading" />
    <PostFormArea v-if="!loading" />
    <Footer v-if="!loading" />
    <Dialog v-if="!loading" />
    <PostFormModal v-if="!loading" />
    <Toast v-if="!loading" />
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
import { mapState } from 'vuex'

export default {
  components: {
    Loading,
    Header,
    Footer,
    PostFormArea,
    PostFormModal,
    Dialog,
    Toast
  },
  computed:{
    ...mapState("shared/loading",{
      loading: state => state.loading
    })
  },
  mounted(){
    this.$store.dispatch('shared/loading/finish')
  }
}
</script>

<style>
</style>
