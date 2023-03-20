安装
npm install rollup @babel/core @babel/preset-env rollup-plugin-babel --save-dev

创建 rollup.config.js rollup 的默认配置文件

package.json 中创建 npm 脚本命令 -cw

-c 意思是要使用指定配置文件（会找到 rollup.config.js） -w 的意思是监控文件变化

-cw 就是 -c 和 -w 的合写

rollup.config.js 配置

plugins:[babel({}),serve({})] 插件都是函数

rollup-plugin-babel

创建 babel 配置文件 .babelrc 也可以写在 rollup.config.js 中的 babel 函数中

.babelrc 添加 presets

为什么 vue2 智能支持 ie9 以上，因为 Object.defineProperty 不支持低版本浏览器

rollup-plugin-serve

import serve from "rollup-plugin-serve"

- `open`：当服务启动时，自动在浏览器中打开相应的页面。

- `contentBase`：指定要服务的文件目录。在这个例子中，设置为 `public` 目录(index.html 在的目录)。

- `port`：指定要使用的端口号。

- `host`：指定要使用的主机名。

<!-- -------------------- -->

无法创建.gitignore 的方法
文件内打开 git bash 输入

touch .gitignore
//---------------------------------
