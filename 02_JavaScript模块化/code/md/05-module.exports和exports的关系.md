# module.exports又是什么？

- 但是Node中我们经常导出东西的时候，又是通过module.exports导出的：
  + module.exports和exports有什么关系或者区别呢？

- 我们追根溯源，通过维基百科中对CommonJS规范的解析：
  + CommonJS中是没有module.exports的概念的；
  + 但是为了实现模块的导出，Node中使用的是Module的类，每一个模块都是Module的一个实例，也就是module；
  + 所以在Node中真正用于导出的其实根本不是exports，而是module.exports；
  + 因为module才是导出的真正实现者；

- 但是，为什么exports也可以导出呢？
  + 这是因为module对象的exports属性是exports对象的一个引用；
  + 也就是说 module.exports = exports = main中的bar；
  
# 内存中表现

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f944e3c759e747d6ac07c2c6877f170d~tplv-k3u1fbpfcp-watermark.image)


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a33628774c64cb3b9ff684025bfd373~tplv-k3u1fbpfcp-watermark.image)