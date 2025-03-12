function findFabonacci(num){
  return num <=1 ? num : findFabonacci(num - 1) + findFabonacci(num - 2)
}
console.log("Fabonacci is", findFabonacci(20))