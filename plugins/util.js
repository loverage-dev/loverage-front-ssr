
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
    }
  }
})