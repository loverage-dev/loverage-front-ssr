<template>
  <div class="t-wrapper">
    <Loading />
    <GlobalHeader />
    <nuxt />
  </div>
</template>

<script>
import Loading from '~/components/atom/loading.vue'
import GlobalHeader from '~/components/organism/global-header.vue'


export default {
  components: {
    Loading,
    GlobalHeader
  }
}
</script>

<style>
</style>
