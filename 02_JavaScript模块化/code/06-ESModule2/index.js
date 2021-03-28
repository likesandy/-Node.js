import {name, age, sayHello} from './modules/foo.js';
console.log(name);
console.log(age);
sayHello('codeTao');
setTimeout(() => {
  name.name = 'sandy';
  console.log(name.name);
},2000)