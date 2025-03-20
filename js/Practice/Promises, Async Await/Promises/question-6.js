const fetchWeather = () =>{
  console.log("Fetching Weather Data")
  return new Promise((resolve, reject)=>{
    if (Math.random() <= 0.25){
      reject("Failed to fetch weather")
      return;
    }
    setTimeout(()=>{
      resolve({ temperature: 30, condition: "Sunny" })
    },1500)
  })
}
fetchWeather()
.then(result=> console.log(result))
.catch(error=> console.log(error))