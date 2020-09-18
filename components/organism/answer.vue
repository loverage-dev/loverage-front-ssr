<template>
<div class="o-answer">
  <h2 class="o-answer__title">
    みんなの回答
  </h2>
  <div class="o-answer__inner" ref="ans__inner" v-bind:style="{ height: boxHeight + 'px'}">

    <div class="o-answer-form" ref="ques4_form">
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
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">前半</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">後半</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="o-answer-form" ref="ques3_form">
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
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">10代</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">20代</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">30代</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">40代</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">50代</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">60代</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="o-answer-form"  ref="ques2_form">
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
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">女性</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">男性</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">その他</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="o-answer-form" ref="ques1_form">
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
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">{{ article.post.opt1 }}</span></li>
            <li class="o-answer-form-btn-list__item change-pointer"><span class="a-button-primary">{{ article.post.opt2 }}</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="o-answer-result" ref="ans_form" v-bind:style="{ height: boxHeight + 'px'}">
    <!-- ▲のvisibilityとheightをjsで設定 -->
      <ul class="o-answer-result-chart">
        <li class="o-answer-result-chart__bar is-full">
        <!-- ▲多かった方に.is-fullをjsで設定 -->
          <div class="o-answer-result-chart__bar-number">3</div>
        </li>
        <li class="o-answer-result-chart__bar" style="height: calc(2*100%/3);">
        <!-- ▲少なかった方にheightをjsで設定 -->
          <div class="o-answer-result-chart__bar-number">1</div>
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
    resizeBox(){
        let h = 0;
        if(h < this.$refs.ques1_form.clientHeight) h = this.$refs.ques1_form.clientHeight;
        if(h < this.$refs.ques2_form.clientHeight) h = this.$refs.ques2_form.clientHeight;
        if(h < this.$refs.ques3_form.clientHeight) h = this.$refs.ques3_form.clientHeight;
        if(h < this.$refs.ques4_form.clientHeight) h = this.$refs.ques4_form.clientHeight;
        if(h < this.$refs.ans_form.clientHeight) h = this.$refs.ans_form.clientHeight;
        this.boxHeight = h;
    },
    handleResize: function() {
      this.resizeBox();
    }
  },
  destroyed: function(){
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>