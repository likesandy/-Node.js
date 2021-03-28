# npm install 原理

* 很多同学之前应该已经会了 npm install <package>，但是你是否思考过它的内部原理呢
  * 执行 npm install它背后帮助我们完成了什么操作
  * 我们会发现还有一个成为package-lock.json的文件，它的作用是什么
  * 从npm5开始，npm支持缓存策略（来自yarn的压力），缓存有什么作用呢

* 这是一幅我画出的根据(视频中) npm install 的原理图
  * ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/601b33a513444e70b8e788854ae328dc~tplv-k3u1fbpfcp-watermark.image)

# npm install 原理图解析

* npm install会检测是有package-lock.json文件
  * 没有lock文件
    * 分析依赖关系，这是因为我们可能包会依赖其他的包，并且多个包之间会产生相同依赖的情况
    * 从registry仓库中下载压缩包（如果我们设置了镜像，那么会从镜像服务器下载压缩包）
    * 获取到压缩包后会对压缩包进行缓存（从npm5开始有的）
    * 将压缩包解压到项目的node_modules文件夹中（前面我们讲过，require的查找顺序会在该包下面查找）
  
  * 有lock文件
    * 检测lock中包的版本是否和package.json中一致（会按照semver版本规范检测）
      * 不一致，那么会重新构建依赖关系，直接会走顶层的流程
    * 一致的情况下，会去优先查找缓存
      * 没有找到，会从registry仓库下载，直接走顶层流程
    * 查找到，会获取缓存中的压缩文件，并且将压缩文件解压到node_modules文件夹中