<template>

    <div class="m-dialog" v-if="isShow">
    <div class="m-dialog__bg">
        <div class="m-dialog__title">この投稿を破棄しますか？</div>
        <div class="m-dialog__button-area">
        <button @click="reset" class="a-button-mini">破棄する</button>
        <button @click="cancel" class="a-button-mini">キャンセル</button>
        </div>
    </div>
</div>

</template>


<script>
import { mapState } from 'vuex'

export default {
  name: "Dialog",
  props: {},
  data() {
    return {};
  },
  computed:{
      ...mapState("shared/dialog",{
        isShow: state => state.isShow
      })
  },
  methods:{
    reset(){
      this.$store.dispatch('shared/post-article/resetFormData')
      this.$store.dispatch('shared/dialog/closeDialog')
      this.$store.dispatch('shared/modal/closeModal')
    },
    cancel(){
      this.$store.dispatch('shared/dialog/closeDialog')
    }
  },
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>