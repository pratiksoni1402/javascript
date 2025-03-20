function delayedMessage(message, delay){
  return new Promise((resolve, reject)=>{
    if (delay < 0 || isNaN(delay)){
      reject("Invalid delay")
    }
    
    setTimeout(()=>{
        resolve(message)
    },delay)
  })
}

delayedMessage("Hello Pratik", -2000)
.then(result=> console.log(result))
.catch(error=> console.log(error))