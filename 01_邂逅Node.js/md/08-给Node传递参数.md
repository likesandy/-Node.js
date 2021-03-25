# Node程序传递参数

- 正常情况下执行一个node程序，直接跟上我们对应的文件即可：

  node 文件名称

- 但是，在某些情况下执行node程序的过程中，我们可能希望给node传递一些参数：

  node 文件名称 参数

- 如果我们这样来使用程序，就意味着我们需要在程序中获取到传递的参数：
  + 获取参数其实是在process的内置对象中的；
  + 如果我们直接打印这个内置对象，它里面包含特别的信息：
  + 其他的一些信息，比如版本、操作系统等大家可以自行查看，后面用到一些其他的我们还会提到；

- 现在，我们先找到其中的argv属性：
  + 我们发现它是一个数组，里面包含了我们需要的参数；

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb0c64432dba4d0b8c5df4f55ca898e5~tplv-k3u1fbpfcp-watermark.image)

# 为什么叫argv呢？

- 你可能有个疑问，为什么叫argv呢？

- 在C/C++程序中的main函数中，实际上可以获取到两个参数：
  + argc：argument counter的缩写，传递参数的个数；
  + argv：argument vector的缩写，传入的具体参数。
    + vector翻译过来是矢量的意思，在程序中表示的是一种数据结构。
    + 在C++、Java中都有这种数据结构，是一种数组结构；
    + 在JavaScript中也是一个数组，里面存储一些参数信息；

- 我们可以在代码中，将这些参数信息遍历出来，使用：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15005eb0aa054f878d8b691972227090~tplv-k3u1fbpfcp-watermark.image)