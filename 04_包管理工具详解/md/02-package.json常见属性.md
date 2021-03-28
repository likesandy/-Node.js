# 项目配置文件

* 事实上，我们每一个项目都会有一个对应的配置文件，无论是前端项目还是后端项目
  * 这个配置文件会记录着你项目的名称、版本号、项目描述等
  * 也会记录着你项目所依赖的其他库的信息和依赖库的版本号

* 这个配置文件在Node环境下面（无论是前端还是后端）就是package.json

* 自己创建配置文件
  * 通过
  ``
  npm init
  ``
  创建的时候填写信息
  或者通过
  ``
  npm init -y
  ``
  所以的信息都是默认的(但是通过这种方式你的项目文件夹不能有中文)

# 常见的属性

* 必须填写的属性：name、version
  * name是项目的名称
  * version是当前项目的版本号
  * description是描述信息，很多时候是作为项目的基本描述
  * author是作者相关信息（发布时用到）
  * license是开源协议（发布时用到）

* private属性
  * private属性记录当前的项目是否是私有的
  * 当值为true时，npm是不能发布它的，这是防止私有项目或模块发布出去的方式

* main属性
  * 设置程序的入口
  * 很多人会有疑惑，webpack不是会自动找到程序的入口吗
    * 这个入口和webpack打包的入口并不冲突
    * 它是在你发布一个模块的时候会用到的
    * 比如我们使用axios模块 const axios = require('axios')
    * 实际上是找到对应的main属性查找文件的

* scripts属性
  * scripts属性用于配置一些脚本命令，以键值对的形式存在
  * 配置后我们可以通过 npm run 命令的key来执行这个命令
  * npm start和npm run start的区别是什么
    * 它们是等价的
    * 对于常用的 start、 test、stop、restart可以省略掉run直接通过 npm start等方式运行

* dependencies属性
  * dependencies属性是指定无论开发环境还是生成环境都需要依赖的包
  * 通常是我们项目实际开发用到的一些库模块
  * 与之对应的是devDependencies

* devDependencies属性
  * 一些包在生成环境是不需要的，比如webpack、babel等
  * 这个时候我们会通过 npm install webpack --save-dev，将它安装到devDependencies属性中

* engines属性
  * engines属性用于指定Node和NPM的版本号
  * 在安装的过程中，会先检查对应的引擎版本，如果不符合就会报错
  * 事实上也可以指定所在的操作系统 "os" : [ "darwin", "linux" ]，只是很少用到

* browserslist属性
  * 用于配置打包后的JavaScript浏览器的兼容情况，参考
  * 否则我们需要手动的添加polyfills来让支持某些语法
  * 也就是说它是为webpack等打包工具服务的一个属性（这里不是详细讲解webpack等工具的工作原理，所以不再给出详情）


# 版本管理的问题

* 我们会发现安装的依赖版本出现：^2.0.3或~2.0.3，这是什么意思呢

* npm的包通常需要遵从semver版本规范
  * semver：[https://semver.org/lang/zh-CN/](https://semver.org/lang/zh-CN/)
  * npm semver：[https://docs.npmjs.com/misc/semver](https://docs.npmjs.com/misc/semver)

* semver版本规范是X.Y.Z
  * X主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）
  * Y次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）
  * Z修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）

* 我们这里解释一下 ^和~的区别
  * ^x.y.z：表示x是保持不变的，y和z永远安装最新的版本
  * ~x.y.z：表示x和y保持不变的，z永远安装最新的版本
