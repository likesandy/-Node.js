# JavaScript代码执行

- 如果我们编写一个js文件，里面存放JavaScript代码，如何来执行它呢？

- 目前我们知道有两种方式可以执行：
  + 将代码交给浏览器执行；
  + 将代码载入到node环境中执行；

- 如果我们希望把代码交给浏览器执行：
  + 需要通过让浏览器加载、解析html代码，所以我们需要创建一个html文件；
  + 在html中通过script标签，引入js文件；
  + 当浏览器遇到script标签时，就会根据src加载、执行JavaScript代码；

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ac7216e14c241788c375ea35903a0c6~tplv-k3u1fbpfcp-watermark.image)

- 如果我们希望把js文件交给node执行：
  + 首先电脑上需要安装Node.js环境，安装过程中会自动配置环境变量；
  + 可以通过终端命令node js文件的方式来载入和执行对应的js文件；

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a53ef1fa46c24633ad4c260ed3b4529d~tplv-k3u1fbpfcp-watermark.image)
