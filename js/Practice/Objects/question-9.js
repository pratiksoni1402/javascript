// function removeDuplicates(array) {
//   let set = new Set();
//   for (let i = 0; i < array.length; i++) {
//     set.add(array[i]);
//   }
//   return Array.from(set)
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//() Method 2
const removeDuplicates = array => [...new Set(array)]
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))