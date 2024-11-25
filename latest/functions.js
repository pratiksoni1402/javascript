let original_value = "John Doe"
let outer_variable = "Hello"
function  MyFunction() {
   original_value = "Pratik"
  let message = "This is my function"
  console.log(outer_variable + ' ' + original_value)
}
console.log("This is original Value", original_value);
MyFunction()
console.log("This is modified value", original_value);
// console.log(message)

//Passing Parameters to a function
function parameterPassing(a, b = "This is default value"){ // if no argument is passed in b then it will take default value
  a = '*' + a + '*';
  console.log(a + ':' + b)
}
let a = 'Pratik'
// When a value is passed as a function parameter, it’s also called an argument.
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
parameterPassing(a);
parameterPassing(a);
console.log(a)

//Returning a value
// A function can return a value back into the calling code as the result.
function sum(a, b){
  return a + b
}
let result = sum(100,2)
console.log(result);

//It is possible to use return without a value. That causes the function to exit immediately.

function MyShow(age){
  if(!age){
    return;
  }
  console.log("Permission Granted")
}

MyShow(10);
//if no value is passed to the function then it will exit immidiately without moving to console part

// --------------------Important Read it---------------------
// Never add a newline between return and the value
// For a long expression in return, it might be tempting to put it on a separate line, like this:

// return
// (some + long + expression + or + whatever * f(a) + f(b))
// That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

  // return;
// (some + long + expression + or + whatever * f(a) + f(b))
// So, it effectively becomes an empty return.

// If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

  // return (
  //   some + long + expression
  //   + or +
  //   whatever * f(a) + f(b)
  // )
// And it will work just as we expect it to.

function CheckAge(age = 22){
  return (age > 18) ? "Permit" : console.log("Get Lost")
}
CheckAge(7)

function CalcAge(age){
  return (age > 18) || console.log("Get out from here")
}
CalcAge(12)

//Minimum of 2 Numbers
function CalculateMin(a, b){
  return (a < b) ? console.log(a) : console.log(b)
}
CalculateMin(8, 8)

//Power Function
function Power(x, n){
  let result = x;
  for (i = 1; i < n; i++){
    result *= x
  }
  return result
}

let finalResult = Power(4,-3);

console.log("This is final result", finalResult);

// function pow(x, n) {
//   let result = x;
//
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
//
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// if (n < 1) {
//   alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//   alert( pow(x, n) );
// }