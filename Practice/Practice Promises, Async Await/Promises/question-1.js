let promise = new Promise(function (resolve, reject){
  setTimeout(()=>{
    resolve("Data Received")
  },2000)
}).then((result)=> console.log(result))