// function higherOrderFunction(obj){
//   console.log("Passing array to function", obj)
// }
// higherOrderFunction({a: 'MCA', b: 'BCA'})


// Higher order function is a function in which one function is passed into another function
function a(b){  //a is higher order function
  console.dir(b)
  b()
}

// Anonymous function 
a(function sayHi(){   //sayHi() is a callback function
  console.log('Hiiiiiiii')
})