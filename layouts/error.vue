<template>
  <div class="container">
      <div class="t-desktop-one-column">
      <div class="t-desktop-one-column__inner">
        <h2 class="a-heading-mini">「Love」 + 「Average」 = 「Loverage」</h2>
        <p class="p-about__sentences">
          

        </p>
    <h2 v-if="error.statusCode === 404" class="error-message">
      リクエストされたURLは存在しません
    </h2>
    <h2 v-else class="error-message">
      エラーが発生しました
    </h2>
    <nuxt-link class="btn" to="/">
      トップページへ戻る
    </nuxt-link>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
</style>
 
<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'info'
}
</script>