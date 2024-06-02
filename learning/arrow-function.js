// function square(a){
//   return a * a
// }
// square(4)

// If there is only 1 parameter then the bracket is optional
const square = (num ) => {  //This is also valid (explicit return)
  return num * num
}
const a = square(5)
console.log("This is result", a)

const remainder = (x, y) => x % y //This is also valid (implicit return)
const result = remainder(4, 2)
console.log("This is result", result)