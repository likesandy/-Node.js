# CommonJS和Node

- 我们需要知道CommonJS是一个规范，最初提出来是在浏览器以外的地方使用，并且当时被命名为ServerJS，后来为了体现它的广泛性，修改为CommonJS，平时我们也会简称为CJS。
  + Node是CommonJS在服务器端一个具有代表性的实现；
  + Browserify是CommonJS在浏览器中的一种实现；
  + webpack打包工具具备对CommonJS的支持和转换；

- 所以，Node中对CommonJS进行了支持和实现，让我们在开发node的过程中可以方便的进行模块化开发：
  + 在Node中每一个js文件都是一个单独的模块；
  + 这个模块中包括CommonJS规范的核心变量：exports、module.exports、require；
  + 我们可以使用这些变量来方便的进行模块化开发；

- 前面我们提到过模块化的核心是导出和导入，Node中对其进行了实现：
  + exports和module.exports可以负责对模块中的内容进行导出；
  + require函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；