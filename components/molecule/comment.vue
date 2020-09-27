<template>
    <div
     class="m-comment"
    :class="{ 
      'm-comment--key-a': comment.selected_opt == 'opt1', 
      'm-comment--key-b': comment.selected_opt == 'opt2'}">
      <div class="m-comment__answer"><span class="m-comment__emoji"><AvatarSmall :sex="comment.user_sex" /></span>{{ optContent }}</div>
      <div class="m-comment__contents">{{ comment.content }}</div>
      <div class="a-label">{{ comment.user_sex|to_jp_gender }}{{comment.user_age|to_jp_age}}</div>
      <LikeText :count="starsValue" :id="comment.origin_id" />
      <div
       class="a-likes"
       @click="favorite(isFavorited(comment.origin_id))"
      :class="{ 'is-liked': isFavorited(comment.origin_id)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.36993 12.9836L7.36921 12.9829C5.64249 11.4172 4.24985 10.1532 3.28287 8.97094C2.32163 7.79574 1.83334 6.76242 1.83334 5.66667C1.83334 3.88948 3.22282 2.5 5.00001 2.5C6.00862 2.5 6.98446 2.97197 7.61933 3.7175L8.00001 4.16454L8.38069 3.7175C9.01556 2.97197 9.9914 2.5 11 2.5C12.7772 2.5 14.1667 3.88948 14.1667 5.66667C14.1667 6.76243 13.6784 7.79577 12.717 8.9719C11.75 10.155 10.3574 11.4205 8.63077 12.9896C8.63065 12.9897 8.63053 12.9899 8.63041 12.99L8.00129 13.5583L7.36993 12.9836Z" stroke="#EB5757"/>
      </svg></div>
    </div>
</template>


<script>
import LikeText from '~/components/atom/like-text.vue'
import AvatarSmall from '~/components/atom/avatar-small.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      default: null
    },
    optContent: {
      type: String,
      default: [""]
    },
    stars:{
      type: Number,
      default: 0
    }
  },
  components: {
      LikeText,
      AvatarSmall
  },
  computed: {
    ...mapGetters({
      isFavorited:'shared/storage/IsFavoritedComment'
    }),
  },
  data() {
    return {
      starsValue: this.stars
    }
  },
  methods: {
    async favorite(favoriteFlag){
      const id = this.comment.origin_id;
      if(favoriteFlag){
        this.$store.dispatch('shared/articles/doUnFavoriteComment', id)
        .then((res)=>{
          //ローカルストレージから履歴削除
          this.$store.dispatch('shared/storage/doDelMyFavoriteComments',id);
          //Viewのお気に入り数をカウントダウン
          this.starsValue -= 1;
        })
        .finally(()=>{
        });
      }else{
        this.$store.dispatch('shared/articles/doFavoriteComment', id)
        .then((res)=>{          //ローカルストレージに履歴追加
          this.$store.dispatch('shared/storage/doAddMyFavoriteComments',{
            id: id
          });
          this.starsValue += 1;
        })
        .finally(()=>{
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>