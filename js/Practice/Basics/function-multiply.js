let multiplyFunction = function (a, b = 1){
  return a * b
}

console.log('-------------',multiplyFunction(4,5))


function test(x, y = 5) {
  return x + y;
}
console.log(test(3));
console.log(test(3, undefined)); //* When a function parameter is undefined, the default value is used.
console.log(test(3, null)); //* Instead, null is treated as 0 in numeric operations (null + number → 0 + number).
