// // Promises
// let promiss = new Promise((resolve, reject) =>{
//     console.log("promise is pending")
//     setTimeout(() => {
//             console.log("Promise Fullfilled")
//             // resolve(true)
//             reject(new Error("Error Encountered"))
//     }, 5000);
// })

// let promiss2 = new Promise((resolve, reject) =>{
//     console.log("promise is pending")
//     setTimeout(() => {
//             console.log("Promise Fullfilled")
//             resolve(true)
//             reject(new Error("Error Encountered"))
//     }, 3000);
// })

// promiss2.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })

// promiss.catch((error)=>{
//     console.log("Error encountered in code please check" + error)
// })

// //Promises chaining

// let promiss3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Resolve after 2 seconds")
//         resolve(56)
//     }, 2000)
// })

// promiss3.then((value)=>{
//     console.log(value)
//     let innerpromiss = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("This promise will resolve ater some time ")
//         }, 2000)
//     })
//     return innerpromiss
// }).then((value)=>{
//     console.log("Hello Hi")
// })

// //loading script with Promise
// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//             let script = document.createElement("script")
//             script.type = "text/javascript"
//             script.src = src
//             document.body.appendChild(script)
//             script.onload = (script) => {
//                     resolve("Script has been loaded sir")
//             }
//             script.onerror = () => { reject(0) }
//     })
// }

// let promiss4 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// promiss4.then((value) => {
//     console.log(value)
//     return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
// }).then((value) => {
//     console.log("Second script ready")
// }).catch((error) => {
//     console.log("We are sorry but we are having problems loading this script")
// })

// //Attaching Multiple Handler to single promises

// let promiss5 = new Promise((resolve, reject)=>{
//     console.log("This Promise is not resolved")
//     setTimeout(()=>{
//         resolve(1)
//     }, 2000)
// })
// promiss5.then(()=>{
//     console.log("This promise is  now resolved")
// })

// // !Promise API
// let promiss6 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Resolve 1")
//         // reject(new Error("Error "))
//     }, 1000)
// })

// let promiss7 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Resolve 2")
//     }, 2000)
// })

// let promiss8 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Resolve 3")
//     }, 3000)
// })

// let promise_all = Promise.all([promiss6, promiss7, promiss8]) //Promise.all (if a single promise got rejected promise.all will not work)
// promise_all.then((value)=>{
//     console.log(value)
// })

// let promise_all_Settle = Promise.allSettled([promiss6, promiss7, promiss8])
// promise_all_Settle.then((value)=>{
//     console.log(value)
// })

// let promise_race = Promise.race([promiss6, promiss7, promiss8])
// promise_race.then((value)=>{
//     console.log(value)
// })

var promise = job1();

promise

.then(function(data1) {
    console.log('data1', data1);
    return job2();
})

.then(function(data2) {
    console.log('data2', data2);
    return 'Hello world';
})

.then(function(data3) {
    console.log('data3', data3);
});

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}

