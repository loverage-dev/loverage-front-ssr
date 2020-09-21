<template>
<div class="o-answer">
  <h2 class="o-answer__title">
    みんなの回答
  </h2>
  <div
   class="o-answer__inner" ref="ans__inner" 
   v-bind:style="{ height: boxHeight + 'px'}">
    <div
     class="o-answer-form"
     ref="ques4_form"
     v-show="progress <= 4">
      <div class="o-answer-form__inner" ref="ques4_form__inner">
        <ul class="o-answer-form-step">
          <li class="o-answer-form-step__item">
            <div class="o-answer-form-step__number">1</div>
            <div class="o-answer-form-step__heading">回答</div>
          </li>
          <li class="o-answer-form-step__item">
            <div class="o-answer-form-step__number">2</div>
            <div class="o-answer-form-step__heading">性別</div>
          </li>
          <li class="o-answer-form-step__item is-active">
            <div class="o-answer-form-step__number">3</div>
            <div class="o-answer-form-step__heading">年代</div>
          </li>
        </ul>
        <div class="o-answer-form__question o-answer-form__question--step3-2 is-active">
          <h4 class="o-answer-form__heading">あなたの年代を教えてください</h4>
          <p class="o-answer-form__description">質問に答えることで、みんなの回答を見たり、<br>コメントを投稿することができます。<br>（会員登録不要）</p>
          <div class="o-answer-form__label">
            <div class="o-answer-form__label-inner">30代</div>
          </div>
          <ul class="o-answer-form-btn-list">
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'ageEorL', value: 'e' })">
             <span class="a-button-primary">前半</span>
            </li>
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'ageEorL', value: 'l' })">
             <span class="a-button-primary">後半</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="o-answer-form" ref="ques3_form" v-show="progress <= 3">
      <div class="o-answer-form__inner" ref="ques3_form__inner">
        <ul class="o-answer-form-step">
          <li class="o-answer-form-step__item">
            <div class="o-answer-form-step__number">1</div>
            <div class="o-answer-form-step__heading">回答</div>
          </li>
          <li class="o-answer-form-step__item">
            <div class="o-answer-form-step__number">2</div>
            <div class="o-answer-form-step__heading">性別</div>
          </li>
          <li class="o-answer-form-step__item is-active">
            <div class="o-answer-form-step__number">3</div>
            <div class="o-answer-form-step__heading">年代</div>
          </li>
        </ul>
        <div class="o-answer-form__question o-answer-form__question--step3-1 is-active">
          <h4 class="o-answer-form__heading">あなたの年代を教えてください</h4>
          <p class="o-answer-form__description">質問に答えることで、みんなの回答を見たり、<br>コメントを投稿することができます。<br>（会員登録不要）</p>
          <ul class="o-answer-form-btn-list">
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'ageNum', value: '10' })"><span class="a-button-primary">10代</span></li>
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'ageNum', value: '20' })"><span class="a-button-primary">20代</span></li>
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'ageNum', value: '30' })"><span class="a-button-primary">30代</span></li>
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'ageNum', value: '40' })"><span class="a-button-primary">40代</span></li>
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'ageNum', value: '50' })"><span class="a-button-primary">50代</span></li>
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'ageNum', value: '60' })"><span class="a-button-primary">60代</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="o-answer-form"  ref="ques2_form" v-show="progress <= 2">
      <div class="o-answer-form__inner" ref="ques2_form__inner">
        <ul class="o-answer-form-step">
          <li class="o-answer-form-step__item">
            <div class="o-answer-form-step__number">1</div>
            <div class="o-answer-form-step__heading">回答</div>
          </li>
          <li class="o-answer-form-step__item is-active">
            <div class="o-answer-form-step__number">2</div>
            <div class="o-answer-form-step__heading">性別</div>
          </li>
          <li class="o-answer-form-step__item">
            <div class="o-answer-form-step__number">3</div>
            <div class="o-answer-form-step__heading">年代</div>
          </li>
        </ul>
        <div class="o-answer-form__question o-answer-form__question--step2 is-active">
          <h4 class="o-answer-form__heading">あなたの性別を教えてください</h4>
          <p class="o-answer-form__description">質問に答えることで、みんなの回答を見たり、<br>コメントを投稿することができます。<br>（会員登録不要）</p>
          <ul class="o-answer-form-btn-list">
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'sex', value: 'f' })">
             <span class="a-button-primary">女性</span>
            </li>
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'sex', value: 'm' })">
             <span class="a-button-primary">男性</span>
            </li>
            <li
             class="o-answer-form-btn-list__item change-pointer"
             @click="answer({ key: 'sex', value: 'o' })">
             <span class="a-button-primary">その他</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="o-answer-form" ref="ques1_form" v-show="progress <= 1">
      <div class="o-answer-form__inner" ref="ques1_form__inner">
        <ul class="o-answer-form-step">
          <li class="o-answer-form-step__item is-active">
            <div class="o-answer-form-step__number">1</div>
            <div class="o-answer-form-step__heading">回答</div>
          </li>
          <li class="o-answer-form-step__item">
            <div class="o-answer-form-step__number">2</div>
            <div class="o-answer-form-step__heading">性別</div>
          </li>
          <li class="o-answer-form-step__item">
            <div class="o-answer-form-step__number">3</div>
            <div class="o-answer-form-step__heading">年代</div>
          </li>
        </ul>
        <div class="o-answer-form__question o-answer-form__question--step1 is-active">
          <h4 class="o-answer-form__heading">あなたはどう思いますか？</h4>
          <p class="o-answer-form__description">質問に答えることで、みんなの回答を見たり、<br>コメントを投稿することができます。<br>（会員登録不要）</p>
          <ul class="o-answer-form-btn-list">
            <li 
              class="o-answer-form-btn-list__item change-pointer" 
              @click="answerOpt({ key: 'selected_opt', value: 'opt1' })" >
              <span class="a-button-primary">{{ article.post.opt1 }}</span>
            </li>
            <li
             class="o-answer-form-btn-list__item change-pointer" 
             @click="answerOpt({ key: 'selected_opt', value: 'opt2' })">
             <span class="a-button-primary">{{ article.post.opt2 }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="o-answer-result" ref="ans_form" v-bind:style="{ height: boxHeight + 'px'}">
    <!-- ▲のvisibilityとheightをjsで設定 -->
      <ul class="o-answer-result-chart">
        <li
         class="o-answer-result-chart__bar"
         v-bind:style="[(isFullOpt1 == false)?{ 'height': 'calc(' + calcVoteRate + '%)' }:{ '': ''}]"
         v-bind:class="{ 'is-full': (isFullOpt1 == true) }">
        <!-- ▲多かった方に.is-fullをjsで設定 -->
          <div class="o-answer-result-chart__bar-number">{{ article.votes.opt1_selected.amount }}</div>
        </li>
        <li
         class="o-answer-result-chart__bar"
         v-bind:style="[(isFullOpt1 == true)?{ 'height': 'calc(' + calcVoteRate + '%)' }:{ '': ''}]"
         v-bind:class="{ 'is-full': (isFullOpt1 == false) }">
        <!-- ▲少なかった方にheightをjsで設定 -->
          <div class="o-answer-result-chart__bar-number">{{ article.votes.opt2_selected.amount }}</div>
        </li>
      </ul>
      <div class="o-answer-result-title">
        <ul class="o-answer-result-title-list">
          <li class="o-answer-result-title-list__item change-pointer">{{ article.post.opt1 }}</li>
          <li class="o-answer-result-title-list__item change-pointer">{{ article.post.opt2 }}</li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Answer",
  props: {
    article: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      boxHeight: 300
    };
  },
  computed:{
      ...mapState("shared/post-answer",{
        inputData: state => state.input,
      }),
      ...mapState("pages/article",{
        progress: state => state.answerProgress,
      }),
      ...mapGetters("pages/article", {
        // 最新の記事
        calcVoteRate:'calcVoteRate',
        isFullOpt1:'isFullOpt1',
    }),
  },
  created: function(){
    },
  mounted: function(){
    window.addEventListener('resize', this.handleResize)
    this.$nextTick(
      ()=>{
        this.resizeBox()
      }
    );
  },
  methods:{
    //回答エリアのサイズ合わせ
    resizeBox(){
        let h = 0;
        //最大サイズのブロックにすべてのブロックをあわせる
        if(h < this.$refs.ques1_form.clientHeight) h = this.$refs.ques1_form.clientHeight;
        if(h < this.$refs.ques2_form.clientHeight) h = this.$refs.ques2_form.clientHeight;
        if(h < this.$refs.ques3_form.clientHeight) h = this.$refs.ques3_form.clientHeight;
        if(h < this.$refs.ques4_form.clientHeight) h = this.$refs.ques4_form.clientHeight;
        if(h < this.$refs.ans_form.clientHeight) h = this.$refs.ans_form.clientHeight;
        this.boxHeight = h;
    },
    handleResize: function() {
      this.resizeBox();
    },
    answer(data){
      this.$store.dispatch('shared/post-answer/doUpdateInput', data);
      this.$store.dispatch('pages/article/countUpAnswerProgress');
    },
    answerOpt(data){
      this.$store.dispatch('shared/post-answer/doUpdateInput', data);
      this.$store.dispatch('pages/article/countUpAnswerProgress');
      if(data.value == 'opt1') this.$store.dispatch('pages/article/doVoteOpt1');
      if(data.value == 'opt2') this.$store.dispatch('pages/article/doVoteOpt2');
      this.$store.dispatch('pages/article/countUpAnswerProgress');
    },
  },
  destroyed: function(){
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize);
      this.$store.dispatch('pages/article/resetAnswerProgress');
      this.$store.dispatch('shared/post-answer/doResetInput');
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>