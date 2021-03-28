console.log('Hello ES Modules');
// 导入
/**
 * 方式一:
 * 这里的后缀名必须加
 * 框架里面是因为有Webpack,Webpack自己帮我们添加了后缀名
 * import {name, age, sayHello} from './modules/foo.js';
 */
/**
 * 方式二:
 * 导出的变量之后可以起别名
 * import {name as myName, age as myAge, sayHello as MySayHello} from './modules/foo.js';
 */
/**
 * 方式三:
 * import * as foo from './modules/foo.js';
 */
// import * as foo from './modules/foo.js';
// console.log(foo);
// console.log(foo.name);
// console.log(foo.age);
// foo.sayHello('codeTao');

// export和import结合使用
import {name, age, sayHello} from './modules/bar.js';
console.log(name);
console.log(age);
sayHello('codeTao');

// default export如何导入
// import sum from './modules/foo.js';
// console.log(sum(10,20));

// let flag = true;
// if(flag){
//   import sum from './modules/foo.js';
//   console.log(sum(10,20));
// }

let flag = true;
if(flag){
  // require的本质是一个函数(函数是在运行时执行的)
  // require('');
  // 执行import函数
  // 如果是webpack的环境下:模块化打包工具支持ES Module ,CommonJS
  // 但是是在纯ES Module的环境下只能用import()
  // 浏览器import()
  // Node环境require()
  // import()是异步代码,返回一个promise,执行成功会执行then函数,失败执行catch函数
  // const promise = import('./modules/foo.js')  
  import('./modules/foo.js')
  .then((res) => {
    console.log(res.name);
    console.log(res.age);
    sayHello('codeTao');
  })
  .catch((err) => {
    console.log(err);
  })
}