import { initMixin } from "./init";

function Vue(options) {
  // console.log(100);
  this._init(options);
}
initMixin(Vue);
export default Vue;
