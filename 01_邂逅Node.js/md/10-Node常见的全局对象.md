# 常见的全局对象

- Node中给我们提供了一些全局对象，方便我们进行一些操作：
  + 这些全局对象，我们并不需要从一开始全部一个个学习；
  + 某些全局对象并不常用，某些全局对象我们会在后续学习中讲到；
  [地址](https://nodejs.org/dist/latest-v15.x/docs/api/globals.html)

- process对象：process提供了Node进程中相关的信息：
  + 比如Node的运行环境、参数信息等；
  + 后面在项目中，我也会讲解，如何将一些环境变量读取到 process 的 env 中；

- console对象：提供了简单的调试控制台，在前面讲解输入内容时已经学习过了。
  + 更加详细请看 [官方文档](https://nodejs.org/api/console.html)

- 定时器函数：在Node中使用定时器有好几种方式：
  + setTimeout(callback, delay[, ...args])：callback在delay毫秒后执行一次；
  + setInterval(callback, delay[, ...args])：callback每delay毫秒重复执行一次；
  + setImmediate(callback[, ...args])：callbackI / O事件后的回调的“立即”执行；
    + 这里先不展开讨论它和setTimeout(callback, 0)之间的区别；
    + 因为它涉及到事件循环的阶段问题，我会在后续详细讲解事件循环相关的知识；
  + process.nextTick(callback[, ...args])：添加到下一次tick队列中；
    + 具体的讲解，也放到事件循环中说明；
    
# 特殊的全局对象

- 为什么我称之为特殊的全局对象呢？
  + 这些全局对象可以在模块中任意使用，但是在命令行交互中是不可以使用的；
  + 包括：__dirname、__filename、exports、module、require()

- __dirname：获取当前文件所在的路径(文件夹)

- __filename：获取当前文件所在的路径和文件名称

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa57cccd0ddd4125a33074fe0872e480~tplv-k3u1fbpfcp-watermark.image)

# global对象

- global是一个全局对象，事实上前端我们提到的process、console、setTimeout等都有被放到global中：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42cdd4ff042b4f75965b642bd3c208be~tplv-k3u1fbpfcp-watermark.image)

# global和window的区别

- 在浏览器中，全局变量都是在window上的，比如有document、setInterval、setTimeout、alert、console等等

- 在Node中，我们也有一个global属性，并且看起来它里面有很多其他对象。

- 但是在浏览器中执行的JavaScript代码，如果我们在顶级范围内通过var定义的一个属性，默认会被添加到window对象上

- 但是在node中，我们通过var定义一个变量，它只是在当前模块中有一个变量，不会放到全局中