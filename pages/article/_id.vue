<template>

<div class="t-contents">
  <article>
    <ArticleTitleArea
      :title="article.post.title"
      :category="article.post.category" 
      :created_at="article.post.created_at" 
      :age="article.post.user_age"
      :gender="article.post.user_sex"
      :likesCount="article.post.favorite"
      :viewsCount="article.post.ref_count"
       />
    <div class="p-article__itself">
      <div class="p-article__block">
        <Avatar :sex="article.post.user_sex" />
        <p class="a-text-30">
          {{ article.post.content }}
        </p>
      </div>
      <TagList 
        v-if="article.post.tag_list.length != 0"
        :tags="article.post.tag_list" />
    </div>
    <Answer :article="article" />
    <CommentArea :article="article" />
      <ShareLikeBar />
  </article>
  <aside>
    <div class="o-list-block-area">
    <ListBlock
    :title="'編集者のおすすめ'"
    :articles="dipsItemsEditors"
    :articlesHidden="dipsItemsHiddenEditors" 
    v-on:clicked="showNextEditors"
    :isEndPage="isEndPageEditors" />
    <ListBlock
    :title="'話題の記事'"
    :articles="dipsItemsHotTopic"
    :articlesHidden="dipsItemsHiddenHotTopic"
    v-on:clicked="showNextHotTopic"
    :isEndPage="isEndPageHotTopic" />
    <ListBlock
    :title="'ピックアップ記事'"
    :articles="dipsItemsFeatured"
    :articlesHidden="dipsItemsHiddenFeatured"
    v-on:clicked="showNextFeatured"
    :isEndPage="isEndPageFeatured" />
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
  mounted(){
    this.$store.dispatch('shared/categories/getCategoryList')
    this.$store.dispatch('shared/editors_pick/resetPageCount')
    this.$store.dispatch('shared/hot_topic/resetPageCount')
    this.$store.dispatch('shared/featured/resetPageCount')
    this.$store.dispatch('pages/article/resetPageCount')
  },
   methods: {
    showNextHotTopic(){ this.$store.dispatch('shared/hot_topic/showNextPage')},
    showNextEditors(){ this.$store.dispatch('shared/editors_pick/showNextPage')},
    showNextFeatured(){　this.$store.dispatch('shared/featured/showNextPage')},
  },
  computed:{
    ...mapState("pages/article",{
      article: state => state.article
    }),
    ...mapState("shared/hot_topic",{
      hot_topics: state => state.articles
    }),
    ...mapState("shared/featured",{
      featureds: state => state.articles
    }),
    ...mapState("shared/editors_pick",{
      editors_picks: state => state.articles
    }),
    ...mapGetters({
      // ピックアップ記事
      articleCountFeatured:'shared/featured/articleCount',
      dipsItemsFeatured:'shared/featured/dipsItems',
      dipsItemsHiddenFeatured:'shared/featured/dipsItemsHidden',
      isEndPageFeatured:'shared/featured/isEndPage',
      pageCountFeatured:'shared/featured/pageCount',
      // 編集者のおすすめ
      articleCountEditors:'shared/editors_pick/articleCount',
      dipsItemsEditors:'shared/editors_pick/dipsItems',
      dipsItemsHiddenEditors:'shared/editors_pick/dipsItemsHidden',
      isEndPageEditors:'shared/editors_pick/isEndPage',
      pageCountEditors:'shared/editors_pick/pageCount',
      // 話題の記事
      articleCountHotTopic:'shared/hot_topic/articleCount',
      dipsItemsHotTopic:'shared/hot_topic/dipsItems',
      dipsItemsHiddenHotTopic:'shared/hot_topic/dipsItemsHidden',
      isEndPageHotTopic:'shared/hot_topic/isEndPage',
      pageCountHotTopic:'shared/hot_topic/pageCount',
    })
  },
  async asyncData({ store,route }) {
    await store.dispatch('pages/article/getArticle', {articleId: route.params.id})
    await store.dispatch('shared/editors_pick/getArticles')
    await store.dispatch('shared/hot_topic/getArticles')
    await store.dispatch('shared/featured/getArticles')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>