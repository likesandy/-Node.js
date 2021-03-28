const EventEmitter = require('events');

// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某个事件
// addListener是on的alias简写
emitter.on('click',(...args)=>{
  console.log('监听到了click事件1',...args);
})
const emitter2 = (args)=>{
  console.log('监听到了click事件2',args);
}
emitter.on('click',emitter2);

// 3.发送一个事件
setTimeout(()=>{
  emitter.emit('click','codeTao','sandy','zm','ymy');
  emitter.off('click',emitter2);
  emitter.emit('click','codeTao','sandy');
},2000)

// 4.获取注册的事件
console.log(emitter.eventNames());
console.log(emitter.listenerCount('click'));
console.log(emitter.listeners('click'));