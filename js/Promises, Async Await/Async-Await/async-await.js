async function f1(){
  return 1
}

//The word “async” before a function means one simple thing: a function always returns a promise.

async function test(){
  let promise = new Promise((resolve, reject)=>{
    setTimeout(resolve=> console.log("Resolve", resolve),)
  })
  // let promiseTwo = new Promise()
  let result = await promise
  console.log("This is result", result)
}

test()