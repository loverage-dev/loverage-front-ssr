<template>

<div class="t-contents">
  <article>
    <ArticleTitleArea
      :title="article.post.title"
      :category="article.post.category" 
      :created_at="article.post.created_at" 
      :age="article.post.user_age"
      :gender="article.post.user_sex"
      :likesCount="article.post.ref_count"
      :viewsCount="article.post.ref_count"
       />
    <div class="p-article__itself">
      <div class="p-article__block">
        <Avatar />
        <p class="a-text-30">
          {{ article.post.content }}
        </p>
      </div>
      <TagList 
        v-if="article.post.tag_list.length != 0"
        :tags="article.post.tag_list" />
    </div>
    <Answer />
    <CommentArea v-if="article.comments.contents.length != 0" />
    <ShareLikeBar />
  </article>
  <aside>
    <div class="o-list-block-area">
      <ListBlock :title="'ピックアップ記事'" :articles="articles_sub1" />
      <ListBlock :title="'話題の記事'" :articles="articles_sub2" />
      <ListBlock :title="'編集者のおすすめ'" :articles="articles_sub3" />
      <ListBlock :title="'最新の記事'" :articles="articles_sub4" />    </div>
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
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Article",
  layout: "article",
  props: {},
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
  computed:{
    ...mapState("pages/article",{
      article: state => state.article,
      articles_sub1: state => state.articles_sub1,
      articles_sub2: state => state.articles_sub2,
      articles_sub3: state => state.articles_sub3,
      articles_sub4: state => state.articles_sub4
    }),
  },
  async asyncData({ store,route }) {
    await store.dispatch('pages/article/getArticle', {articleId: route.params.id})
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>