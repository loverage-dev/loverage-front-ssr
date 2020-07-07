<template>

    <footer class="o-footer">
        <div class="o-footer__block">
            <div class="o-footer__box">
            <div class="o-footer__logo">
                <Logo />
            </div>
            <nav>
                <ul class="o-footer__nav-list">
                    <li class="o-footer__nav-list-item"><a href="">相談する</a></li>
                    <li class="o-footer__nav-list-item"><a href="">検索する</a></li>
                    <li class="o-footer__nav-list-item"><nuxt-link to="/category-list">カテゴリ</nuxt-link></li>
                    <li class="o-footer__nav-list-item"><nuxt-link to="/ranking">ランキング</nuxt-link></li>
                    <li class="o-footer__nav-list-item"><nuxt-link to="/about">Loveargeとは</nuxt-link></li>
                    <li class="o-footer__nav-list-item"><nuxt-link to="/terms">利用規約</nuxt-link></li>
                    <li class="o-footer__nav-list-item"><nuxt-link to="/privacy-policy">個人情報保護方針</nuxt-link></li>
                    <li class="o-footer__nav-list-item"><a href="https://forms.gle/SyRjk8Yv9VeatFCL7" target="_blank">お問い合わせ</a></li>
                </ul>
            </nav>
            </div>
            <div class="o-footer__sns">
            <div class="o-footer__sns-heading">Follow us on</div>
            <ul class="o-footer__sns-list">
                <li class="o-footer__sns-list-item twitter"><a href=""><img src="~assets/images/icons/twitter.svg" alt="Twitter"></a></li>
                <li class="o-footer__sns-list-item instagram"><a href=""><img src="~assets/images/icons/instagram.svg" alt="Instagram"></a></li>
                <li class="o-footer__sns-list-item facebook"><a href=""><img src="~assets/images/icons/facebook.svg" alt="Facebook"></a></li>
            </ul>
            </div>
        </div>
    <small class="o-footer__copyright">©️2019 Loverage. All Rights Reserved.</small>
    </footer>

</template>

<script>
import Logo from '~/components/atom/logo.vue'

export default {
  name: "Footer",
  props: {},
  data() {
    return {};
  },
  created: function(){
    },
  mounted: function(){
  },
  destroyed: function(){
  },
  components: {
      Logo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>