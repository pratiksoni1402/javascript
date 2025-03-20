let factorailOf = 10;
let factorialIs = 1;
console.time("Factorial Calculation")
for (let i = 2; i <=factorailOf; i++){
  factorialIs *= i
}
console.timeEnd("Factorial Calculation")
console.log("Factorial Is", factorialIs)


function calculateFactorial(num){
  return num <= 1 ? 1 : num * calculateFactorial(num - 1)
}
console.time("Recursive Factorial");
console.log("Factorial By Recursion", calculateFactorial(10))
console.timeEnd("Recursive Factorial");