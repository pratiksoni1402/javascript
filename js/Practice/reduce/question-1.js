// What is reduce()?
// reduce() is a method used to "reduce" an array into a single value (like a number, object, or even another array).

// Syntax

const numbers = [10, 20, 30, 40];
let sum = numbers.reduce((acc, current, index,arr) => {
  return acc + current;
},0)
console.log(sum)

const num = [2, 3, 4]
const product = num.reduce((acc, currentValue)=> {
  return acc * currentValue;
})
console.log(product)