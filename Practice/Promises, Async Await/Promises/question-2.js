function checkNumber(num){
  return new Promise((resolve, reject)=>{
    if(num %2 ===0){
      resolve(num)
    }else{
      reject(num)
    }
  })
}

checkNumber(5)
  .then(response=> console.log("Even number detected", response))
  .catch(error=> console.log("Odd number detected", error))