//() Scheduling: setTimeout and setInterval

//* We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

//? There are two methods for it:
//* setTimeout allows us to run a function once after the interval of time.

//* setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

//? These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

//() setTimeout
//? The syntax:
//* let timeId = setTimeOut(func|code, [delay], [arg1], [arg2], ...)

//? Parameters:

//() func|code
//* Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.

//() delay
//* The delay before run, in milliseconds (1000 ms = 1 second), by default 0.

//() arg1, arg2…
//* Arguments for the function

function sayHi(){
  console.log("Hello after 1 second")
}

setTimeout(sayHi, 2000)

//? witharguments
function sayHiAgain(fname, lname){
  console.log(fname + ' ' + lname)
}

setTimeout(sayHiAgain,1000,'Pratik', 'Soni');

// setTimeout("console.log('Hello from string')", 3000);
setTimeout(()=> console.log("Hello from arrow function"), 4000)

//() Canceling with clearTimeout
//* A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

//? Syntax
//$ let timerId = setTimeout(...);
//$ clearTimeout(timerId);

let timerId = setTimeout(()=> console.log('From set interval'),5000)
console.log(timerId)
clearTimeout(timerId)
console.log(timerId)

//() setInterval
//$ let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

//* All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.

//? To stop further calls, we should call clearInterval(timerId).

let newInterval = setInterval(()=> console.log('Hello Interval'), 2000)

setTimeout(()=>{clearInterval(newInterval); console.log('stop');},5000)