// let promise = new Promise(function (resolve, reject){
//   // executor (the producing code, "singer")
// })

let newPromise = new Promise((resolve, reject)=>{
  setTimeout(()=> resolve('done'), 1000)
})
newPromise.then(
  result=> console.log(result),
  error=> console.log(error)
);
