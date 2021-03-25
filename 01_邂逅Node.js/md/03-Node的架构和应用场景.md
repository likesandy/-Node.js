# 通过前面所学的知识,现在回顾一下Node.js到底是什么

- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。

- 也就是说Node.js是基于V8引擎来执行JavaScript代码,基于V8引擎,但是不仅仅只有V8引擎
  + 前面我们知道V8可以嵌入到任何C ++应用程序中，无论是Chrome还是Node.js，事实上都是嵌入了V8引擎
来执行JavaScript代码；
  + 但是在Chrome浏览器中，还需要解析、渲染HTML、CSS等相关渲染引擎，另外还需要提供支持浏览器操作
的API、浏览器自己的事件循环等；
  + 另外，在Node.js中我们也需要进行一些额外的操作，比如文件系统读/写、网络IO、加密、压缩解压文件等
操作；

# 浏览器和Node.js架构区别

- 我们可以简单理解规划出Node.js和浏览器的差异：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a3f11babd1949aa85303fb266f446d8~tplv-k3u1fbpfcp-watermark.image)

# Node.js架构

- 我们来看一个单独的Node.js的架构图：
  + 我们编写的JavaScript代码会经过V8引擎，再通过Node.js的Bindings，将任务放到Libuv的事件循环中；
  + libuv（Unicorn Velociraptor—独角伶盗龙）是使用C语言编写的库；
  + libuv提供了事件循环、文件系统读写、网络IO、线程池等等内容；
  + 具体内部代码的执行流程，我会在后续专门讲解事件和异步IO的原理中详细讲解；

  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8b6f28d7f4f49ac94c5c0cbd5378a3c~tplv-k3u1fbpfcp-watermark.image)

# Node.js的应用场景

- Node.js的快速发展也让企业对Node.js技术越来越重视，在前端招聘中通常会对Node.js有一定的要求，特别对于高级前端开发
工程师，Node.js更是必不可少的技能：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/006cc11df09640b7ad82902729e62c59~tplv-k3u1fbpfcp-watermark.image)

  + 目前前端开发的库都是以node包的形式进行管理；
  + npm、yarn工具成为前端开发使用最多的工具；
  + 越来越多的公司使用Node.js作为web服务器开发；
  + 大量项目需要借助Node.js完成前后端渲染的同构应用；
  + 资深前端工程师需要为项目编写脚本工具（前端工程师编写脚本通常会使用JavaScript，而不是Python或者shell）；
  + 很多企业在使用Electron来开发桌面应用程序；