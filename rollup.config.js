//rollup 默认可以导出一个对象 ，作为打包的配置文件
import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
export default {
  input: "./src/index.js",
  output: {
    file: "./dist/vue.js",
    name: "Vue",
    format: "umd", //打包格式  esm  es6模块  commonjs模块  iife自执行函数  umd 统一模块规范（commonjs amd  iife 不支持 es6模块）
    sourcemap: true, //代码映射，生成.map 文件 ，  希望可以调试源代码
  },
  plugins: [
    babel({
      exclude: "node_modules/**", //排除node_modules 下所有文件
    }),
    serve({
      // open: true,

      port: 3000,
      contentBase: "public",
      openPage: "/index.html",
    }),
  ],
};
