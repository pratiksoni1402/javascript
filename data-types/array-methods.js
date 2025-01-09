//() Splice

//? The arrays are objects, so we can try to use delete:
let arr = ['i', 'go', 'school']
console.log("Length before deleting", arr.length)
delete arr[1]
console.log("Array after deleting", arr)
console.log("Length after deleting", arr.length)

//* The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

//* That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of the elements to shift and occupy the freed place. We expect to have a shorter array now.

//! The arr.splice method is a Swiss army knife for arrays. It can do everything: insert, remove and replace elements.

//? arr.splice(start[, deleteCount, elem1, ..., elemN])

//* It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

let arr2 = ['and', 'study', 'javascript', 'right', 'now']
arr2.splice(0, 0, 'Lets', 'Dance')
console.log(arr2)

//() Slice
//? The method arr.slice is much simpler than the similar-looking arr.splice.

//* arr.slice([start], [end])

let arr3 = ['t', 'e', 's', 't']
console.log("Sliced", arr3.slice(1, 3))
console.log("Sliced", arr3.slice(-2))

//* We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

//() Concat
//?The method arr.concat creates a new array that includes values from other arrays and additional items.

let arr4 = [1, 2, 3, 4]
let arrayLike = {
  0: 'something',
  1: 'something else',
  length: 2, //! important to define the length
  [Symbol.isConcatSpreadable]: true,
}
//* …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

console.log('Array Concatenated', arr4.concat(5,6))
console.log('Array Concatenated', arr4.concat([5, 6], [7, 8], 9, arrayLike));

//() Iterate: forEach

let arr5 = ['Bolba', 'Gandlaf', 'Nazgul']

arr5.forEach((item, index) =>(
  console.log(`${item} is at ${index}`)
))

//() Searching in array

//?indexOf/lastIndexOf and includes
//* The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

//* arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
//* arr.includes(item, from) – looks for item starting from index from, returns true if found.
//* Usually, these methods are used with only one argument: the item to search. By default, the search is from the beginning.

let arr6 = [1, 0, false]
console.log(arr6.indexOf(0))//1
console.log(arr6.indexOf(false)) //2
console.log(arr6.indexOf(null)) //-1
console.log(arr6.includes(1)) //true

//! Please note that indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.
