// What is reduce()?
// reduce() is a method used to "reduce" an array into a single value (like a number, object, or even another array).

// Syntax

const numbers = [10, 20, 30, 40];
let sum = 0

numbers.reduce((acc, current, index,arr) => (
  sum += current
),0)
console.log(sum)