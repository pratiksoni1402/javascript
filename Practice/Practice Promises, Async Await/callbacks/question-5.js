function fetchUserData(userId, callBackFunction){
  console.log("Fetching User Data")
  setTimeout(()=>{
    const user = { id: userId, name: "John Doe", age: 25 }
    callBackFunction(user)
  }, 2000)
}

function dataFetching(user){
  console.log("User Data Received:", user)
}

fetchUserData(1, dataFetching)