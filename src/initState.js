import { observe } from "./observe/index.js";

export function initState(vm) {
  let opts = vm.$options;
  console.log(vm);
  if (opts.props) {
    initProps(vm);
  }
  if (opts.data) {
    initData(vm);
  }
}

function proxy(vm, target, key) {
  Object.defineProperty(vm, key, {
    get() {
      console.log("取值了");
      return vm[target][key];
    },
    set(newValue) {
      console.log("设置值了");
      vm[target][key] = newValue;
    },
  });
}
function initProps(vm) {}

function initData(vm) {
  //data  函数 或 对象
  let data = vm.$options.data;

  data = typeof data === "function" ? data.call(vm) : data; //data 执行的时候 this指向了window,因为data 是 ()=>{return{}} 箭头函数，所以要改变this指向，指向vue实例
  console.log(data, "data初始化");

  vm._data = data;
  //data数据进行劫持  vue2采用Object.defineProperty
  observe(data);

  // 将vm._data 用vm代理就可以了
  for (let key in data) {
    proxy(vm, "_data", key);
  }
}
