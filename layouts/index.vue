<template>
  <div class="t-wrapper">
    <Header />
    <CategoryMenu/>
    <KvItem />
    <nuxt />
    <PostFormArea />
    <Footer />
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
import PostFormArea from '~/components/organism/post-form-area.vue'
import PostFormModal from '~/components/organism/post-form-modal.vue'
import Dialog from '~/components/molecule/dialog.vue'
import Toast from '~/components/atom/toast.vue'

export default {
  components: {
    Header,
    Footer,
    CategoryMenu,
    KvItem,
    PostFormArea,
    PostFormModal,
    Dialog,
    Toast
  }
}
</script>

<style>
</style>
