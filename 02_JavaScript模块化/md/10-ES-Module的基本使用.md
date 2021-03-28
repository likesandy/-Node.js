# 认识 ES Module

- JavaScript没有模块化一直是它的痛点，所以才会产生我们前面学习的社区规范：CommonJS、AMD、CMD等，所以在ES推出自己的模块化系统时，大家也是兴奋异常

- ES Module和CommonJS的模块化有一些不同之处
  + 一方面它使用了import和export关键字
  + 另一方面它采用编译期的静态分析，并且也加入了动态引用的方式

- ES Module模块采用export和import关键字来实现模块化
  + export负责将模块内的内容导出
  + import负责从其他模块导入内容

- 了解：采用ES Module将自动采用严格模式：use strict
  + 如果你不熟悉严格模式可以简单看一下MDN上的解析
  + [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

- 这里我在浏览器中演示ES6的模块化开发：
  + 想使用ES Module必须给script添加type属性,值为module
  + ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88610348133b41988eb2c2eb7aa085be~tplv-k3u1fbpfcp-watermark.image)
  + 如果直接在浏览器中运行代码，会报如下错误
  + 这个在MDN上面有给出解释
    + [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)
    + 你需要注意本地测试 — 如果你通过本地加载Html 文件 (比如一个 file:// 路径的文件), 你将会遇到 CORS 错误，因为Javascript 模块安全性需要
    + 你需要通过一个服务器来测试
    + VSCode中有一个插件：Live Server即可开启本地服务

# export关键字

- export关键字将一个模块中的变量、函数、类等导出

- 我们希望将其他中内容全部导出，它可以有如下的方式

- 方式一：在语句声明的前面直接加上export关键字

- 方式二：将所有需要导出的标识符，放到export后面的 {}中
  + 注意：这里的 {}里面不是ES6的对象字面量的增强写法，{}也不是表示一个对象的
  + 所以： export {name: name}，是错误的写法

- 方式三：导出时给标识符起一个别名

# import关键字

- import关键字负责从另外一个模块中导入内容

- 导入内容的方式也有多种

- 方式一：import {标识符列表} from '模块'
  + 注意：这里的{}也不是一个对象，里面只是存放导入的标识符列表内容

- 方式二：导入时给标识符起别名

- 方式三：通过 * 将模块功能放到一个模块功能对象（a module object）上

# Export和import结合使用

- 补充：export和import可以结合使用

- ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0350695c30424c2bbbdd7004affa4085~tplv-k3u1fbpfcp-watermark.image)

- 上述代码的意思是我们导入了foo文件中导出的内容,然后接着导出自己想导出的内容

- 为什么要这样做呢？
  + 在开发和封装一个功能库时，通常我们希望将暴露的所有接口放到一个文件中
  + 这样方便指定统一的接口规范，也方便阅读
  + 这个时候，我们就可以使用export和import结合使用

# default用法

- 前面我们学习的导出功能都是有名字的导出（named exports）
  + 在导出export时指定了名字
  + 在导入import时需要知道具体的名字

- 还有一种导出叫做默认导出（default export）
  + 默认导出export时可以不需要指定名字
  + 在导入时不需要使用 {}，并且可以自己来指定名字
  + 它也方便我们和现有的CommonJS等规范相互操作

- 注意：在一个模块中，只能有一个默认导出（default export）

# import函数

- 通过import加载一个模块，是不可以在其放到逻辑代码中的
  + 这是因为ES Module在被JS引擎解析时，就必须知道它的依赖关系
  + 由于这个时候js代码没有任何的运行，所以无法在进行类似于if判断中根据代码的执行情况
  + 甚至下面的这种写法也是错误的：因为我们必须到运行时能确定path的值

- 但是某些情况下，我们确确实实希望动态的来加载某一个模块
  + 如果根据不懂的条件，动态来选择加载模块的路径
  + 这个时候我们需要使用 import() 函数来动态加载

# CommonJS的加载过程

- CommonJS模块加载js文件的过程是运行时加载的，并且是同步的
  + 运行时加载意味着是js引擎在执行js代码的过程中加载 模块
  + 同步的就意味着一个文件没有加载结束之前，后面的代码都不会执行

- CommonJS通过module.exports导出的是一个对象
  + 导出的是一个对象意味着可以将这个对象的引用在其他模块中赋值给其他变量
  + 但是最终他们指向的都是同一个对象，那么一个变量修改了对象的属性，所有的地方都会被修改

# ES Module加载过程

- ES Module加载js文件的过程是编译（解析）时加载的，并且是异步的
  + 编译时（解析）时加载，意味着import不能和运行时相关的内容放在一起使用
  + 比如from后面的路径需要动态获取
  + 比如不能将import放到if等语句的代码块中
  + 所以我们有时候也称ES Module是静态解析的，而不是动态或者运行时解析的

- 异步的意味着：JS引擎在遇到import时会去获取这个js文件，但是这个获取的过程是异步的，并不会阻塞主线程继续执行
  + 也就是说设置了 type=module 的代码，相当于在script标签上也加上了 async 属性
  + 如果我们后面有普通的script标签以及对应的代码，那么ES Module对应的js文件和代码不会阻塞它们的执行

- ES Module通过export导出的是变量本身的引用
  + export在导出一个变量时，js引擎会解析这个语法，并且创建模块环境记录（module environmentrecord）
  + 模块环境记录会和变量进行 绑定（binding），并且这个绑定是实时的
  + 而在导入的地方，我们是可以实时的获取到绑定的最新值的

- 所以，如果在导出的模块中修改了变化，那么导入的地方可以实时获取最新的变量

- 注意：在导入的地方不可以修改变量，因为它只是被绑定到了这个变量上（其实是一个常量）

- 思考：如果bar.js中导出的是一个对象，那么main.js中是否可以修改对象中的属性呢
  + 答案是可以的，因为他们指向同一块内存空间

# Node对ES Module的支持

- 在最新的Current版本（v14.13.1）中，支持es module我们需要进行如下操作
  + 方式一：在package.json中配置 type: module（后续学习，我们现在还没有讲到package.json文件的作用）
  + 方式二：文件以 .mjs 结尾，表示使用的是ES Module
  + 这里我们暂时选择以 .mjs 结尾的方式来演练

- 支持需要将使用import导入和导出的文件的后缀名都改为mjs