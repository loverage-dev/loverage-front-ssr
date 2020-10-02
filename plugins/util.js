
/**************************************************
 *        共通関数・定数用モジュール
 * ************************************************
*/
import Vue from 'vue'

Vue.mixin({
  methods: {
    getRandomNo(){
      let num = 1 + Math.floor( Math.random() * 8 )
      return num
    },
    getDayOfWeek: function(){
      let week=['sun','mon','tue','wed','thu','fri','sat'][new Date().getDay()]
      return  week
    },
    getOgpTitle(userSex, userAge, content){
      let title = ""
      switch (userSex) {
        case "m":
          title = "男性"
          break;
        case "f":
          title = "女性"
          break;
        case "o":
          title = "その他"
          break;
      }
      title += "・"
      switch (userAge) {
        case "e_10s":
          title += "10代前半"
          break;
        case "l_10s":
          title += "10代後半"
          break;
        case "e_20s":
          title += "20代前半"
          break;
        case "l_20s":
          title += "20代後半"
          break;
        case "e_30s":
          title += "30代前半"
          break;
        case "l_30s":
          title += "30代後半"
          break;
        case "e_40s":
          title += "40代前半"
          break;
        case "l_40s":
          title += "40代後半"
          break;
        case "e_50s":
          title += "50代前半"
          break;
        case "l_50s":
          title += "50代後半"
          break;
        case "e_60s":
          title += "60代前半"
          break;
        case "l_60s":
          title += "60代後半"
          break;
      }
      title = '('+title+')'
      title += (content.substr(0, 29) + '…')
      return title
    },
    concatMetaDescription(description){
      const sanitized = description.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
      let d = ""
      if(sanitized.length < 140){
        d = sanitized
      }else{
        d = sanitized.substr(0, 139)
        d += "…"
      }
      return d
    }
  }
})