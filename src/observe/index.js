class Observer {
  constructor(data) {
    //Object.definProperty 只能劫持已经存在的属性， 后增的，删除的不能劫持（vue里面为此单独写了一些api,$set  $delete

    this.walk(data);
  }
  walk(data) {
    //循环对象，对属性依次劫持
    Object.keys(data).forEach((key) => {
      //“重新定义” 属性
      defineReactive(data, key, data[key]);
    });
  }
}

export function defineReactive(target, key, value) {
  //闭包
  observe(value);
  Object.defineProperty(target, key, {
    get() {
      console.log("get-data");
      //取值的时候会执行get
      return value;
    },
    set(newValue) {
      //修改的时候 会执行set
      console.log("set-data");
      if (value === newValue) return;
      value = newValue;
    },
  });
}

export function observe(data) {
  // 对这个对象进行劫持
  if (typeof data !== "object" || data == null) {
    return; //只对对象进行劫持
  }
  //如果一个对象被劫持过了，那就不需要再被劫持了（要判断一个对象是否被接吃过，可以增添一个实例，用实例来判断是否被劫持）

  //   console.log(data);
  return new Observer(data);
}
