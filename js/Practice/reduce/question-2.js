// Q3. Count how many times each fruit appears in the array using reduce():
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit)=>{
  acc[fruit] = (acc[fruit] || 0) +1;
  return acc
},{})

console.log(fruitCount);