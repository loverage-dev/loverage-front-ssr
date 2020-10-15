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
        <p class="a-text-30 allow-br" v-html="article.post.content">
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
const ListBlock = () => import('~/components/organism/list-block.vue')
const ArticleTitleArea = () => import('~/components/organism/article-title-area.vue')
const Avatar = () => import('~/components/atom/avatar.vue')
const TagList = () => import('~/components/molecule/tag-list.vue')
const Answer = () => import('~/components/organism/answer.vue')
const CommentArea = () => import('~/components/organism/comment-area.vue')
const ShareLikeBar = () => import('~/components/molecule/share-like-bar.vue')
import { mapState, mapGetters } from 'vuex'

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
  data: () => {
    return {
      meta:{
        title: "",
        description: "",
        type: "",
        url: "",
        imgPath: ""
      },
      imgFile: {
          f_e_10s: 'f_e_10s.jpg',
          f_e_20s: 'f_e_20s_1.jpg',
          f_e_30s: 'f_e_30s.jpg',
          f_e_40s: 'f_e_40s.jpg',
          f_e_50s: 'f_e_50s.jpg',
          f_e_60s: 'f_e_60s.jpg',
          f_l_10s: 'f_l_10s.jpg',
          f_l_20s: 'f_l_20s_1.jpg',
          f_l_30s: 'f_l_30s.jpg',
          f_l_40s: 'f_l_40s.jpg',
          f_l_50s: 'f_l_50s.jpg',
          f_l_60s: 'f_l_60s.jpg',
          m_e_10s: 'm_e_10s.jpg',
          m_e_20s: 'm_e_20s_1.jpg',
          m_e_30s: 'm_e_30s.jpg',
          m_e_40s: 'm_e_40s.jpg',
          m_e_50s: 'm_e_50s.jpg',
          m_e_60s: 'm_e_60s.jpg',
          m_l_10s: 'm_l_10s.jpg',
          m_l_20s: 'm_l_20s_1.jpg',
          m_l_30s: 'm_l_30s.jpg',
          m_l_40s: 'm_l_40s.jpg',
          m_l_50s: 'm_l_50s.jpg',
          m_l_60s: 'm_l_60s.jpg',
          o_e_10s: 'o_e_10s.jpg',
          o_e_20s: 'o_e_20s.jpg',
          o_e_30s: 'o_e_30s.jpg',
          o_e_40s: 'o_e_40s.jpg',
          o_e_50s: 'o_e_50s.jpg',
          o_e_60s: 'o_e_60s.jpg',
          o_l_10s: 'o_l_10s.jpg',
          o_l_20s: 'o_l_20s.jpg',
          o_l_30s: 'o_l_30s.jpg',
          o_l_40s: 'o_l_40s.jpg',
          o_l_50s: 'o_l_50s.jpg',
          o_l_60s: 'o_l_60s.jpg',
      }
    }
  },
  head(){
    this.meta.title = this.article.post.title;
    this.meta.type = "article";
    this.meta.description = this.article.post.content;
    this.meta.url = `${process.env.BASE_URL}${this.$router.history.base}${this.$route.path}`;
    this.meta.imgPath = this.getOgpFilePath(this.article.post.user_sex, this.article.post.user_age)
    return{
      bodyAttrs: {
        class: 'p-article'
      },
      title: `${this.meta.title}|Loverage`,
      meta: [
        { hid: "description", name: "description", content: this.concatMetaDescription(this.meta.description)},
        { hid: "og:description", property: "og:description", name: 'og:description', content: this.concatMetaDescription(this.meta.description)},
        { hid: "og:title", property: "og:title", content: this.getOgpTitle(this.article.post.user_sex,this.article.post.user_age, this.article.post.title)},
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:url", property: "og:url", content: this.meta.url },
        { hid: "og:image", property: "og:image", content: this.meta.imgPath },
        { name: "twitter:title", content: this.getOgpTitle(this.article.post.user_sex, this.article.post.user_age, this.article.post.title) }
      ]
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
    getOgpFilePath (sex, age) {
      let imgPath = ""
      //10代
      if(sex === 'f' && age === 'e_10s') imgPath = this.imgFile.f_e_10s;
      if(sex === 'f' && age === 'l_10s') imgPath = this.imgFile.f_l_10s;
      if(sex === 'm' && age === 'e_10s') imgPath = this.imgFile.m_e_10s;
      if(sex === 'm' && age === 'l_10s') imgPath = this.imgFile.m_l_10s;
      if(sex === 'o' && age === 'e_10s') imgPath = this.imgFile.o_e_10s;
      if(sex === 'o' && age === 'l_10s') imgPath = this.imgFile.o_l_10s;
      //20代
      if(sex === 'f' && age === 'e_20s') imgPath = this.imgFile.f_e_20s;
      if(sex === 'f' && age === 'l_20s') imgPath = this.imgFile.f_l_20s;
      if(sex === 'm' && age === 'e_20s') imgPath = this.imgFile.m_e_20s;
      if(sex === 'm' && age === 'l_20s') imgPath = this.imgFile.m_l_20s;
      if(sex === 'o' && age === 'e_20s') imgPath = this.imgFile.o_e_20s;
      if(sex === 'o' && age === 'l_20s') imgPath = this.imgFile.o_l_20s;
      //30代
      if(sex === 'f' && age === 'e_30s') imgPath = this.imgFile.f_e_30s;
      if(sex === 'f' && age === 'l_30s') imgPath = this.imgFile.f_l_30s;
      if(sex === 'm' && age === 'e_30s') imgPath = this.imgFile.m_e_30s;
      if(sex === 'm' && age === 'l_30s') imgPath = this.imgFile.m_l_30s;
      if(sex === 'o' && age === 'e_30s') imgPath = this.imgFile.o_e_30s;
      if(sex === 'o' && age === 'l_30s') imgPath = this.imgFile.o_l_30s;
      //40代
      if(sex === 'f' && age === 'e_40s') imgPath = this.imgFile.f_e_40s;
      if(sex === 'f' && age === 'l_40s') imgPath = this.imgFile.f_l_40s;
      if(sex === 'm' && age === 'e_40s') imgPath = this.imgFile.m_e_40s;
      if(sex === 'm' && age === 'l_40s') imgPath = this.imgFile.m_l_40s;
      if(sex === 'o' && age === 'e_40s') imgPath = this.imgFile.o_e_40s;
      if(sex === 'o' && age === 'l_40s') imgPath = this.imgFile.o_l_40s;
      //50代
      if(sex === 'f' && age === 'e_50s') imgPath = this.imgFile.f_e_50s;
      if(sex === 'f' && age === 'l_50s') imgPath = this.imgFile.f_l_50s;
      if(sex === 'm' && age === 'e_50s') imgPath = this.imgFile.m_e_50s;
      if(sex === 'm' && age === 'l_50s') imgPath = this.imgFile.m_l_50s;
      if(sex === 'o' && age === 'e_50s') imgPath = this.imgFile.o_e_50s;
      if(sex === 'o' && age === 'l_50s') imgPath = this.imgFile.o_l_50s;
      //60代
      if(sex === 'f' && age === 'e_60s') imgPath = this.imgFile.f_e_60s;
      if(sex === 'f' && age === 'l_60s') imgPath = this.imgFile.f_l_60s;
      if(sex === 'm' && age === 'e_60s') imgPath = this.imgFile.m_e_60s;
      if(sex === 'm' && age === 'l_60s') imgPath = this.imgFile.m_l_60s;
      if(sex === 'o' && age === 'e_60s') imgPath = this.imgFile.o_e_60s;
      if(sex === 'o' && age === 'l_60s') imgPath = this.imgFile.o_l_60s;
      return `${process.env.BASE_URL}/ogp/${imgPath}`
    }
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
    await Promise.all([
      store.dispatch('pages/article/getArticle', {articleId: route.params.id}),
      store.dispatch('shared/editors_pick/getArticles',{apart_from_id: route.params.id}),
      store.dispatch('shared/hot_topic/getArticles',{apart_from_id: route.params.id}),
      store.dispatch('shared/featured/getArticles',{apart_from_id: route.params.id})])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allow-br{
  white-space: pre-line;
}
</style>