# events模块

* Node中的核心API都是基于异步事件驱动的
  * 在这个体系中，某些对象（发射器（Emitters））发出某一个事件
  * 我们可以监听这个事件（监听器 Listeners），并且传入的回调函数，这个回调函数会在监听到事件时调用

* 发出事件和监听事件都是通过EventEmitter类来完成的，它们都属于events对象
  * emitter.on(eventName, listener)：监听事件，也可以使用addListener
  * emitter.off(eventName, listener)：移除事件监听，也可以使用removeListener
  * emitter.emit(eventName[, ...args])：发出事件，可以携带一些参数

# 常见的属性

* EventEmitter的实例有一些属性，可以记录一些信息
  * emitter.eventNames()：返回当前 EventEmitter对象注册的事件字符串数组
  * emitter.getMaxListeners()：返回当前 EventEmitter对象的最大监听器数量，可以通过setMaxListeners()来修改，默认是10
  * emitter.listenerCount(事件名称)：返回当前 EventEmitter对象某一个事件名称，监听器的个数
  * emitter.listeners(事件名称)：返回当前 EventEmitter对象某个事件监听器上所有的监听器数组

# 方法的补充

* emitter.once(eventName, listener)：事件监听一次

* emitter.prependListener()：将监听事件添加到最前面

* emitter.prependOnceListener()：将监听事件添加到最前面，但是只监听一次

* emitter.removeAllListeners([eventName])：移除所有的监听器

