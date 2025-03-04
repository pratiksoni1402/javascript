let promiseChaining = new Promise((resolve, reject)=>{
  setTimeout(()=>resolve(1), 2000)
}).then(function (result){
  return result * 2
}).then(function (result){
  return result * 3
}).then(function (result){
  console.log("This is result", result)
})
