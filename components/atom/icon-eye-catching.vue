<template>
  <div>
    <!-- ↓↓デフォルト画像の定義 -->
        <!-- ↓↓デフォルト画像の定義 -->
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'f'" v-lazy="f_e_10s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 1" v-lazy="f_e_20s_1" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 2" v-lazy="f_e_20s_2" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 3" v-lazy="f_e_20s_3" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 4" v-lazy="f_e_20s_4" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 5" v-lazy="f_e_20s_5" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 6" v-lazy="f_e_20s_6" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 7" v-lazy="f_e_20s_7" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 8" v-lazy="f_e_20s_8" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'f'" v-lazy="f_e_30s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'f'" v-lazy="f_e_40s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'f'" v-lazy="f_e_50s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'f'" v-lazy="f_e_60s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'f'" v-lazy="f_l_10s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 1" v-lazy="f_l_20s_1" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 2" v-lazy="f_l_20s_2" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 3" v-lazy="f_l_20s_3" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 4" v-lazy="f_l_20s_4" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 5" v-lazy="f_l_20s_5" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 6" v-lazy="f_l_20s_6" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 7" v-lazy="f_l_20s_7" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 8" v-lazy="f_l_20s_8" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'f'" v-lazy="f_l_30s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'f'" v-lazy="f_l_40s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'f'" v-lazy="f_l_50s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'f'" v-lazy="f_l_60s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'm'" v-lazy="m_e_10s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 1" v-lazy="m_e_20s_1" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 2" v-lazy="m_e_20s_2" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 3" v-lazy="m_e_20s_3" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 4" v-lazy="m_e_20s_4" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 5" v-lazy="m_e_20s_5" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 6" v-lazy="m_e_20s_6" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 7" v-lazy="m_e_20s_7" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 8" v-lazy="m_e_20s_8" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'm'" v-lazy="m_e_30s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'm'" v-lazy="m_e_40s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'm'" v-lazy="m_e_50s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'm'" v-lazy="m_e_60s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'm'" v-lazy="m_l_10s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 1" v-lazy="m_l_20s_1" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 2" v-lazy="m_l_20s_2" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 3" v-lazy="m_l_20s_3" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 4" v-lazy="m_l_20s_4" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 5" v-lazy="m_l_20s_5" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 6" v-lazy="m_l_20s_6" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 7" v-lazy="m_l_20s_7" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 8" v-lazy="m_l_20s_8" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'm'" v-lazy="m_l_30s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'm'" v-lazy="m_l_40s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'm'" v-lazy="m_l_50s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'm'" v-lazy="m_l_60s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'o'" v-lazy="o_e_10s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'o'" v-lazy="o_e_20s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'o'" v-lazy="o_e_30s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'o'" v-lazy="o_e_40s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'o'" v-lazy="o_e_50s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'o'" v-lazy="o_e_60s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'o'" v-lazy="o_l_10s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'o'" v-lazy="o_l_20s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'o'" v-lazy="o_l_30s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'o'" v-lazy="o_l_40s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'o'" v-lazy="o_l_50s" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'o'" v-lazy="o_l_60s" alt>
    <!-- ↓↓タグ付き画像の定義 -->
    <img v-if="!isContentPage && user_img == '' && tag != '' && tag != null" v-lazy="f_e_20s_happy" alt> <!-- 20代の女が友達と楽しそうにしてる -->
    <img v-if="isContentPage && user_img != ''" :src="user_img" alt>
  </div>
</template>

<script>

export default {
  name: "IconEyeCatching",
  props: {
    sex: {
      type: [String],
      default: ""
    },
    age: {
      type: [String],
      default: ""
    },
    tag: {
      type: [String],
      default: ""
    },
    user_img: {
      type: [String],
      default: ""
    },
    isContentPage: {
      type: [Boolean],
      default: false
    },
    fileNo: {
      type: [Number],
      default: 1
    }
  },
  data(){
    return {
      f_e_10s: '/attr/f_e_10s.jpg',
      f_e_20s_1: '/attr/f_e_20s_1.jpg',
      f_e_20s_2: '/attr/f_e_20s_2.jpg',
      f_e_20s_3: '/attr/f_e_20s_3.jpg',
      f_e_20s_4: '/attr/f_e_20s_4.jpg',
      f_e_20s_5: '/attr/f_e_20s_5.jpg',
      f_e_20s_6: '/attr/f_e_20s_6.jpg',
      f_e_20s_7: '/attr/f_e_20s_7.jpg',
      f_e_20s_8: '/attr/f_e_20s_8.jpg',
        f_e_30s: '/attr/f_e_30s.jpg',
        f_e_40s: '/attr/f_e_40s.jpg',
        f_e_50s: '/attr/f_e_50s.jpg',
        f_e_60s: '/attr/f_e_60s.jpg',
        f_l_10s: '/attr/f_l_10s.jpg',
        f_l_20s_1: '/attr/f_l_20s_1.jpg',
        f_l_20s_2: '/attr/f_l_20s_2.jpg',
        f_l_20s_3: '/attr/f_l_20s_3.jpg',
        f_l_20s_4: '/attr/f_l_20s_4.jpg',
        f_l_20s_5: '/attr/f_l_20s_5.jpg',
        f_l_20s_6: '/attr/f_l_20s_6.jpg',
        f_l_20s_7: '/attr/f_l_20s_7.jpg',
        f_l_20s_8: '/attr/f_l_20s_8.jpg',
        f_l_30s: '/attr/f_l_30s.jpg',
        f_l_40s: '/attr/f_l_40s.jpg',
        f_l_50s: '/attr/f_l_50s.jpg',
        f_l_60s: '/attr/f_l_60s.jpg',
        m_e_10s: '/attr/m_e_10s.jpg',
        m_e_20s_1: '/attr/m_e_20s_1.jpg',
        m_e_20s_2: '/attr/m_e_20s_2.jpg',
        m_e_20s_3: '/attr/m_e_20s_3.jpg',
        m_e_20s_4: '/attr/m_e_20s_4.jpg',
        m_e_20s_5: '/attr/m_e_20s_5.jpg',
        m_e_20s_6: '/attr/m_e_20s_6.jpg',
        m_e_20s_7: '/attr/m_e_20s_7.jpg',
        m_e_20s_8: '/attr/m_e_20s_8.jpg',
        m_e_30s: '/attr/m_e_30s.jpg',
        m_e_40s: '/attr/m_e_40s.jpg',
        m_e_50s: '/attr/m_e_50s.jpg',
        m_e_60s: '/attr/m_e_60s.jpg',
        m_l_10s: '/attr/m_l_10s.jpg',
        m_l_20s_1: '/attr/m_l_20s_1.jpg',
        m_l_20s_2: '/attr/m_l_20s_2.jpg',
        m_l_20s_3: '/attr/m_l_20s_3.jpg',
        m_l_20s_4: '/attr/m_l_20s_4.jpg',
        m_l_20s_5: '/attr/m_l_20s_5.jpg',
        m_l_20s_6: '/attr/m_l_20s_6.jpg',
        m_l_20s_7: '/attr/m_l_20s_7.jpg',
        m_l_20s_8: '/attr/m_l_20s_8.jpg',
        m_l_30s: '/attr/m_l_30s.jpg',
        m_l_40s: '/attr/m_l_40s.jpg',
        m_l_50s: '/attr/m_l_50s.jpg',
        m_l_60s: '/attr/m_l_60s.jpg',
        o_e_10s: '/attr/o_e_10s.jpg',
        o_e_20s: '/attr/o_e_20s.jpg',
        o_e_30s: '/attr/o_e_30s.jpg',
        o_e_40s: '/attr/o_e_40s.jpg',
        o_e_50s: '/attr/o_e_50s.jpg',
        o_e_60s: '/attr/o_e_60s.jpg',
        o_l_10s: '/attr/o_l_10s.jpg',
        o_l_20s: '/attr/o_l_20s.jpg',
        o_l_30s: '/attr/o_l_30s.jpg',
        o_l_40s: '/attr/o_l_40s.jpg',
        o_l_50s: '/attr/o_l_50s.jpg',
        o_l_60s: '/attr/o_l_60s.jpg',
        f_e_20s_happy: '/attr/f_e_20s_happy.jpg'
    }
  },
  components: {}
};
</script>

<style></style>
