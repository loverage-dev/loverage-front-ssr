<template>
  <div class="o-pagetitle">
    <div class="o-pagetitle__inner">
      <h1 class="o-pagetitle__title">{{ pageTitle }}</h1>
      <div class="o-pagetitle__supp"> {{ pageDescription }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    pageTitle: {
      type: [String],
      default: ""
    },
    pageDescription: {
      type: [String],
      default: ""
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
