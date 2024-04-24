function simpleArraySum(ar) {
  // Write your code here
  let sum = 0
  for(let i = 0; i < ar.length; i++){
      sum = sum + ar[i]
      console.log(sum)
  }
  
}

const array = [1, 2, 3, 4, 5]
const result = simpleArraySum(array)
console.log(result)