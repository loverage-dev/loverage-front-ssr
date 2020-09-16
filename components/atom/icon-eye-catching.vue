<template>
  <div>
    <!-- ↓↓デフォルト画像の定義 -->
        <!-- ↓↓デフォルト画像の定義 -->
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'f'" src="~assets/images/attr/f_e_10s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 1" src="~assets/images/attr/f_e_20s_1.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 2" src="~assets/images/attr/f_e_20s_2.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 3" src="~assets/images/attr/f_e_20s_3.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 4" src="~assets/images/attr/f_e_20s_4.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 5" src="~assets/images/attr/f_e_20s_5.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 6" src="~assets/images/attr/f_e_20s_6.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 7" src="~assets/images/attr/f_e_20s_7.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'f' && fileNo == 8" src="~assets/images/attr/f_e_20s_8.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'f'" src="~assets/images/attr/f_e_30s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'f'" src="~assets/images/attr/f_e_40s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'f'" src="~assets/images/attr/f_e_50s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'f'" src="~assets/images/attr/f_e_60s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'f'" src="~assets/images/attr/f_l_10s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 1" src="~assets/images/attr/f_l_20s_1.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 2" src="~assets/images/attr/f_l_20s_2.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 3" src="~assets/images/attr/f_l_20s_3.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 4" src="~assets/images/attr/f_l_20s_4.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 5" src="~assets/images/attr/f_l_20s_5.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 6" src="~assets/images/attr/f_l_20s_6.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 7" src="~assets/images/attr/f_l_20s_7.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'f' && fileNo == 8" src="~assets/images/attr/f_l_20s_8.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'f'" src="~assets/images/attr/f_l_30s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'f'" src="~assets/images/attr/f_l_40s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'f'" src="~assets/images/attr/f_l_50s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'f'" src="~assets/images/attr/f_l_60s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'm'" src="~assets/images/attr/m_e_10s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 1" src="~assets/images/attr/m_e_20s_1.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 2" src="~assets/images/attr/m_e_20s_2.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 3" src="~assets/images/attr/m_e_20s_3.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 4" src="~assets/images/attr/m_e_20s_4.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 5" src="~assets/images/attr/m_e_20s_5.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 6" src="~assets/images/attr/m_e_20s_6.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 7" src="~assets/images/attr/m_e_20s_7.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'm' && fileNo == 8" src="~assets/images/attr/m_e_20s_8.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'm'" src="~assets/images/attr/m_e_30s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'm'" src="~assets/images/attr/m_e_40s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'm'" src="~assets/images/attr/m_e_50s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'm'" src="~assets/images/attr/m_e_60s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'm'" src="~assets/images/attr/m_l_10s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 1" src="~assets/images/attr/m_l_20s_1.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 2" src="~assets/images/attr/m_l_20s_2.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 3" src="~assets/images/attr/m_l_20s_3.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 4" src="~assets/images/attr/m_l_20s_4.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 5" src="~assets/images/attr/m_l_20s_5.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 6" src="~assets/images/attr/m_l_20s_6.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 7" src="~assets/images/attr/m_l_20s_7.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'm' && fileNo == 8" src="~assets/images/attr/m_l_20s_8.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'm'" src="~assets/images/attr/m_l_30s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'm'" src="~assets/images/attr/m_l_40s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'm'" src="~assets/images/attr/m_l_50s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'm'" src="~assets/images/attr/m_l_60s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_10s' && sex == 'o'" src="~assets/images/attr/o_e_10s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_20s' && sex == 'o'" src="~assets/images/attr/o_e_20s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_30s' && sex == 'o'" src="~assets/images/attr/o_e_30s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_40s' && sex == 'o'" src="~assets/images/attr/o_e_40s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_50s' && sex == 'o'" src="~assets/images/attr/o_e_50s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'e_60s' && sex == 'o'" src="~assets/images/attr/o_e_60s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_10s' && sex == 'o'" src="~assets/images/attr/o_l_10s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_20s' && sex == 'o'" src="~assets/images/attr/o_l_20s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_30s' && sex == 'o'" src="~assets/images/attr/o_l_30s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_40s' && sex == 'o'" src="~assets/images/attr/o_l_40s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_50s' && sex == 'o'" src="~assets/images/attr/o_l_50s.jpg" alt>
    <img v-if="!isContentPage && user_img == '' && (tag == null || tag == '') && age == 'l_60s' && sex == 'o'" src="~assets/images/attr/o_l_60s.jpg" alt>
    <!-- ↓↓タグ付き画像の定義 -->
    <img v-if="!isContentPage && user_img == '' && tag != '' && tag != null" src="~assets/images/attr/f_e_20s_happy.jpg" alt> <!-- 20代の女が友達と楽しそうにしてる -->
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
  components: {}
};
</script>

<style></style>
