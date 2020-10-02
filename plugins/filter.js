import Vue from 'vue'
import dayjs from 'dayjs'


/**************************************************
 * 　パイプ各種
 **************************************************/

// 投稿者の年代キーワードを日本語名へ変換
Vue.filter('to_jp_age', function (value) {
    switch (value) {
      case "e_10s":
        return "10代前半"
      case "l_10s":
        return "10代後半"
      case "e_20s":
        return "20代前半"
      case "l_20s":
        return "20代後半"
      case "e_30s":
        return "30代前半"
      case "l_30s":
        return "30代後半"
      case "e_40s":
        return "40代前半"
      case "l_40s":
        return "40代後半"
      case "e_50s":
        return "50代前半"
      case "l_50s":
        return "50代後半"
      case "e_60s":
        return "60代前半"
      case "l_60s":
        return "60代後半"
      default:
        return value
    }
  });

  // 投稿者の年代（簡易表記）を日本語名へ変換する
    Vue.filter('to_jp_age_simple', function (value) {
    switch (value) {
      case "10s":
        return "10代"
      case "20s":
        return "20代"
      case "30s":
        return "30代"
      case "40s":
        return "40代"
      case "50s":
        return "50代"
      case "60s":
        return "60代"
      default:
        return value
    }
  });

  // 投稿者の性別を日本語名へ変換する
  Vue.filter('to_jp_gender', function (value) {
    switch (value) {
      case "m":
        return "男性"
      case "f":
        return "女性"
      case "o":
        return "その他"
      default:
        return value
    }
  });

  // 年月日時分をフォーマットする
  Vue.filter('format_datetime', function (value) {
    return dayjs(value).format('YYYY/MM/DD HH:mm')
  }
  );

  // 年月日をフォーマットする
  Vue.filter('format_date', function (value) {
    return dayjs(value).format('YY/MM/DD')
  }
  );