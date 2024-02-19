let a = {
    names: "Pratik",
    language: "JavaScript"
}
 let prototpye ={
    run: () =>{
        console.log("Alert")
    }
 }

 a.__proto__ = prototpye
 a.run()