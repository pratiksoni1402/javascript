function delayedGreetings(name, callbackFunction){
  setTimeout(()=>{
    callbackFunction(name)
  },3000)
}

function greeting(name){
  console.log("Hello", name)
}

delayedGreetings("Pratik", greeting)