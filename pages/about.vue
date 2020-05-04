<template>

<div class="t-contents t-not-article-not-index">
    <CategoryMenu />
    <PageTitle  :pageTitle="aaa"/>
  <div class="t-desktop-one-column">
    <div class="t-desktop-one-column__inner">
      <h2 class="a-heading-mini">「Love」 + 「Average」 = 「Loverage」</h2>
      <p class="p-about__sentences">
        日々の恋愛の中で「これって自分だけ？」と感じることはありませんか？<br>誰かに共感を求めたり、意見を聞きたくなる瞬間は誰にでもあるはず。<br><br>Loverageは、そんなあなたの恋愛にまつわる相談事を、二択の質問形式で投稿することで、みんなの意見（平均値）を知ることができるサービスです。<br><br>日々の些細な出来事から、性にまつわるプライベートなことまで、家族や友人にも言えないあなたの今の気持ちをお聞かせください。
      </p>
      <div class="p-about__author">
        Loverage運営事務局
      </div>
    </div>
  </div>
  <div class="o-list-block-area">
      <ListBlock />
      <ListBlock />
      <ListBlock />
      <ListBlock />
      <ListBlock />
  </div>
</div>
</template>

<script>

import CategoryMenu from '~/components/atom/category-menu.vue'
import PageTitle from '~/components/atom/pagetitle.vue'
import ListBlock from '~/components/organism/list-block.vue'

export default {
  name: "About",
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
      CategoryMenu,
      PageTitle,
      ListBlock
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>