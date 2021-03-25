# exports导出

- 注意：exports是一个对象，我们可以在这个对象中添加很多个属性，添加的属性会导出；

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5e1cb20c868492f933fcc1f66471e1e~tplv-k3u1fbpfcp-watermark.image)

- 另外一个文件中可以导入：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6c5314fd3c749d2b5e8cc89743b5ea9~tplv-k3u1fbpfcp-watermark.image)

- 上面这行完成了什么操作呢？理解下面这句话，Node中的模块化一目了然
  + 意味着main中的bar变量等于exports对象；
  + 也就是require通过各种查找方式，最终找到了exports这个对象；
  + 并且将这个exports对象赋值给了bar变量;
  + bar变量就是exports对象了；

# 它们实际上是一个浅层拷贝

- 为了进一步论证，bar和exports是同一个对象：
  + 所以，bar对象是exports对象的浅拷贝（引用赋值）；
  + 浅拷贝的本质就是一种引用的赋值而已；