function fetchUserAge(age){
  console.log("Fetching User's Age from Database")
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(Math.random() < 0.3){
        reject("")
      }else{
        resolve(age)
      }
    },1500)
  })
}

fetchUserAge(25)
.then(result=> console.log("Age fetched successfully",result))
.catch(error=> console.log("Error in fetching age",error))