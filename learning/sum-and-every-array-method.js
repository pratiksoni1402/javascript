//If Some method encounter true (single time) then it will break the execution and not proceed further. 
const numbers = [0, 2, 4, 6, 8, 9]
numbers.some((nums) => (
  console.log(nums > 4)
))

//Every method return true if all the values are true and if a single value became false then it will return false

const oddNumber = numbers.every((odd) => {
  return odd % 2 == 0
})

console.log("This is odd number", oddNumber)