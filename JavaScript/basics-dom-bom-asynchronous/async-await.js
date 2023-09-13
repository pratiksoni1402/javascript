async function hello(){  //async will always return a promise

let JodhpurWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("35 Deg")
    }, 1000)  
})

let JaipurWeather = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("35 Deg")
    }, 3000)  
})

    let jdrweather = await JodhpurWeather
    let juweather = await JaipurWeather
    return [jdrweather, juweather]
    
}

// let a = hello()
// console.log(a)

const charry = async () =>{
    console.log("I will not wait")
}

const exp = async () =>{
    console.log("Welcome to weather control room")
    let ha = await hello()
    let ch = await charry()

    ha.then((value)=>{
        console.log(value)
    }) 
    
    ch.then((value)=>{
        console.log(value)
    })
    
}
