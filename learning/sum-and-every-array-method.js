//If Some method encounter true (single time) then it will break the execution and not proceed further. 
const evenNumbers = [0, 2, 4, 6, 8]
evenNumbers.some((nums) => (
  console.log(nums > 4)
))