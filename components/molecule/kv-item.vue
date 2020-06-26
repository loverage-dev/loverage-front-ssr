<template>
    <a href="">
        <div class="m-kv-item">
            <div class="m-kv-item__image-area">
              <img src="~assets/images/dammy-kv.jpg" alt="">
            </div>
            <client-only>
              <ListItemWithoutImage />
            </client-only>
        </div>
    </a>
</template>

<script>
import ListItemWithoutImage from '~/components/molecule/list-item--without-image.vue'
export default {
  name: "KvItem",
  props: {},
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {
      ListItemWithoutImage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>