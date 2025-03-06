const getUserDetails = (user) =>{
  console.log("Fetching User Details...")
  return new Promise((resolve, reject)=>{
    if(Math.random() <=0.2){
      reject("User not found")
    }else{
      setTimeout(()=>{
        resolve(user)
      },2000)
    }
  })
}
let userObj = { name: "Pratik", age: 25 }
getUserDetails(userObj)
.then(result=> console.log("User Found", result))
.catch(error=> console.log(error))