const name = 'codeTao';
const age = 19;
const sayHello = (name)=>{
  console.log('你好' + name);
}

// 导出
/**
 * 方式一:
 * export const name = 'codeTao';
 */
/**
 * 方式二:
 * {}不是一个对象
 * {放置要导出的变量的引用列表}
 * export {name};
 */
/**
 * 方式三:
 * {}导出时,可以给变量起别名
 * export {name as myName};
 */
export {
  name,
  age,
  sayHello
}

export default  (num1, num2) => {
  return num1 + num2;
}