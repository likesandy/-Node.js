// let name = 'codeTao';
let name = {name:'codeTao'}
const age = 19;
const sayHello = (name)=>{
  console.log('你好' + name);
}
setTimeout(() => {
  console.log(name);
},1000)
export {
  name,
  age,
  sayHello
}
