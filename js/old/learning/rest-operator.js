const nums = [1, 2, 3, 4, 5]
function add(...nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

console.log(add())
