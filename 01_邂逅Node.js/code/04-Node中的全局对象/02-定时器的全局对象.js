setTimeout(()=>{
  console.log('setTimeout');
},0);

setInterval(()=>{
  console.log('setInterval');
});

setImmediate(()=>{
  console.log('setImmediate');
});

process.nextTick(()=>{
  console.log('process.nextTick');
});