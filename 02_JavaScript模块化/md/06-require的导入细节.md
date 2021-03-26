# require细节

- 我们现在已经知道，require是一个函数，可以帮助我们引入一个文件（模块）中导入的对象。

- 那么，require的查找规则是怎么样的呢？
  + https://nodejs.org/dist/latest-v14.x/docs/api/modules.html

- 这里我总结比较常见的查找规则：导入格式如下：require(X)

- 情况一：X是一个核心模块，比如path、http
  + 直接返回核心模块，并且停止查找

- 情况二：X是以 ./ 或 ../ 或 /（根目录）开头的
  + 将X当做一个文件在对应的目录下查找；
    + 如果有后缀名，按照后缀名的格式查找对应的文件
    + 如果没有后缀名，会按照如下顺序：
      + 直接查找文件X
      + 查找X.js文件
      + 查找X.json文件
      + 查找X.node文件
  + 没有找到对应的文件，将X作为一个目录
    + 查找目录下面的index文件
    + 查找X/index.js文件
    + 查找X/index.json文件
    + 查找X/index.node文件
  + 如果没有找到，那么报错：not found
  + 直接是一个X（没有路径），并且X不是一个核心模块
  + /Users/coderwhy/Desktop/Node/TestCode/04_learn_node/05_javascript-module/02_commonjs/main.js中编写require('why’)

  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62a3842b57f64e688489fc6dba454277~tplv-k3u1fbpfcp-watermark.image)
  
  + 如果上面的路径中都没有找到，那么报错：not found
