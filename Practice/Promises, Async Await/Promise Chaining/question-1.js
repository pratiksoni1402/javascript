let promise = new Promise((resolve, reject)=>{
  setTimeout(()=> resolve("Hello"))
})

promise
  .then(result=>{
  console.log("This is Result ->", result)
  return result + ' ' + 'World'
})
  .then(modifiedResult=> {
   return new Promise((resolve, reject)=>{
     setTimeout(()=>{
       console.log("This is final result ->", modifiedResult)
        return resolve(modifiedResult + ' ' + 'How are you?')
     },1000)
   })
})
.then(mainResult=>{
  return Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.3) {
          reject("Random failure in first promise!");
        } else {
          resolve(mainResult);
        }
      }, 2000); // 2-second delay
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.3) {
          reject("Random failure in second promise!");
        } else {
          resolve("I hope you are doing well!");
        }
      }, 3000); // 3-second delay
    }),
  ]);
}).then(file => {
  console.log("Both results received:");
  file.forEach(item => console.log(item));
})
.catch(error=> console.log("An error occurred", error))