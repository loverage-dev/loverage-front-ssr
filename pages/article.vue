<template>

<div class="t-contents">
  <article>
    <ArticleTitleArea />
    <div class="p-article__itself">
      <div class="p-article__block">
        <Avatar />
        <p class="a-text-30">
          大学生です。この前、バイト先の店長から急に告白されました。歳は10個も上ですが、いつも優しく学校や家での悩み事にも親身になって聞いてくれます。人としても男性としてもすごく好きなのですが、周りの友人は同じ大学や同年代と付き合っている人がほとんどなのですごく不安もあります。自分だけなのでは…？と思ってしまっています。学生時代に、バイト先の店長と恋愛関係になった経験がある方はいますか？大学生です。この前、バイト先の店長から急に告白されました。歳は10個も上ですが、いつも優しく学校や家での悩み事にも親身になって聞いてくれます。人としても男性としてもすごく好きなのですが、周りの友人は同じ大学や同年代と付き合っている人がほとんどなのですごく不安もあります。自分だけなのでは…？と思ってしまっています。学生時代に、バイト先の店長と恋愛関係になった経験がある方はいますか？
        </p>
      </div>
      <TagList />
    </div>
    <Answer />
    <CommentArea />
    <ShareLikeBar />
  </article>
  <aside>
    <div class="o-list-block-area">
        <ListBlock />
        <ListBlock />
        <ListBlock />
    </div>
  </aside>
</div>

</template>

<script>
import ArticleTitleArea from '~/components/organism/article-title-area.vue'
import Avatar from '~/components/atom/avatar.vue'
import TagList from '~/components/molecule/tag-list.vue'
import Answer from '~/components/organism/answer.vue'
import CommentArea from '~/components/organism/comment-area.vue'
import ShareLikeBar from '~/components/molecule/share-like-bar.vue'
import ListBlock from '~/components/organism/list-block.vue'

export default {
  name: "Article",
  layout: "article",
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
      ArticleTitleArea,
      Avatar,
      TagList,
      Answer,
      CommentArea,
      ShareLikeBar,
      ListBlock
  },
  head: {
    bodyAttrs: {
      class: 'p-article'
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>