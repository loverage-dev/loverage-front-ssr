
/**************************************************
 *        共通関数・定数用モジュール
 * ************************************************
*/
const API_URL = () => {
  return "https://limitless-crag-46636.herokuapp.com";

    // return 'https://whispering-anchorage-57506.herokuapp.com'
}
export default ({}, inject) => {
  inject('API_URL', API_URL);
}