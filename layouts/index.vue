<template>
  <div class="t-wrapper">
    <Header />
    <CategoryMenu/>
    <Loading v-show="loading" />
    <KvItem v-show="!loading" />
    <nuxt v-if="!loading" />
    <PostFormArea v-show="!loading" />
    <Footer v-show="!loading" />
    <PostFormModal />
    <Dialog />
    <Toast />
  </div>
</template> 

<script>
import Header from '~/components/organism/header.vue'
import Footer from '~/components/organism/footer.vue'
import CategoryMenu from '~/components/atom/category-menu.vue'
import KvItem from '~/components/molecule/kv-item.vue'
import Loading from '~/components/molecule/loading.vue'
import PostFormArea from '~/components/organism/post-form-area.vue'
import PostFormModal from '~/components/organism/post-form-modal.vue'
import Dialog from '~/components/molecule/dialog.vue'
import Toast from '~/components/atom/toast.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Header,
    Footer,
    CategoryMenu,
    KvItem,
    PostFormArea,
    PostFormModal,
    Dialog,
    Toast,
    Loading
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
