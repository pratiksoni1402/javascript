setTimeout(()=>{
    console.log("1")
}, 1000)

try{
    setTimeout(()=>{          /** this will not  work and will throw an error because try is outside of set time out */
        try{                  /** this will work */

            console.log(rahul) // try catch work synchronously if an exception occur in a scheduled code like in setTimeout then try catch wony catch it
        }catch(error){
            console.log("Error occured")
        }
    },100)
}
catch(error){
    console.log("Error encountered in code")
}

setTimeout(()=>{
    console.log("2")
    
}, 3000)

setTimeout(()=>{
    console.log("3")
}, 5000)

setTimeout(()=>{
    console.log("4")
}, 7000)

setTimeout(()=>{
    console.log("5")
}, 9000)

setTimeout(()=>{
    console.log("6")
}, 11000)

