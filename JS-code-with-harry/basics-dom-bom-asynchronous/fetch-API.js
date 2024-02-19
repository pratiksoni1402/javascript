let a = fetch("https://goweather.herokuapp.com/weather/Ny")
a.then((response)=>{                         //todo Getting a response is a two stage method
    console.log(response.headers)
}).then((value2)=>{
    console.log(value2)
})

let b = fetch("https://goweather.herokuapp.com/weather/Ny")
b.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})

let c = fetch("https://goweather.herokuapp.com/weather/Ny")
c.then((response) => { 
        return response.json()
}).then((response) => {
        console.log(response)
})