# CommonJS规范缺点

- CommonJS加载模块是同步的：
  + 同步的意味着只有等到对应的模块加载完毕，当前模块中的内容才能被运行；
  + 这个在服务器不会有什么问题，因为服务器加载的js文件都是本地文件，加载速度非常快；

- 如果将它应用于浏览器呢？
  + 浏览器加载js文件需要先从服务器将文件下载下来，之后在加载运行；
  + 那么采用同步的就意味着后续的js代码都无法正常运行，即使是一些简单的DOM操作；

- 所以在浏览器中，我们通常不使用CommonJS规范：
  + 当然在webpack中使用CommonJS是另外一回事；
  + 因为它会将我们的代码转成浏览器可以直接执行的代码；

- 在早期为了可以在浏览器中使用模块化，通常会采用AMD或CMD：
  + 但是目前一方面现代的浏览器已经支持ES Modules，另一方面借助于webpack等工具可以实现对CommonJS或者ES Module代码的转换；
  + AMD和CMD已经使用非常少了，所以这里我们进行简单的演练；

# AMD规范

- AMD主要是应用于浏览器的一种模块化规范：
  + AMD是Asynchronous Module Definition（异步模块定义）的缩写；
  + 它采用的是异步加载模块；
  + 事实上AMD的规范还要早于CommonJS，但是CommonJS目前依然在被使用，而AMD使用的较少了；

- 我们提到过，规范只是定义代码的应该如何去编写，只有有了具体的实现才能被应用：
  + AMD实现的比较常用的库是require.js和curl.js；

# require.js

- 下载require.js
  + [下载地址](https://github.com/requirejs/requirejs)
  + 找到其中的require.js文件；

- 定义HTML的script标签引入require.js和定义入口文件：
  + data-main属性的作用是在加载完src的文件后会加载执行该文件
