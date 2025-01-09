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

//()find and findIndex/findLastIndex

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"},
];

let user = users.find((value) => value.id == 1)
console.log("This is the value" ,user.name)

//* In real life, arrays of objects are a common thing, so the find method is very useful.

//* Note that in the example we provide to find the function item => item.id == 1 with one argument. That’s typical, other arguments of this function are rarely used.

//* The arr.findIndex method has the same syntax but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.


//* The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

let indexValue = users.findIndex((value)=> value.name == 'John')
console.log("Index Value", indexValue)

//() Filter
let someUser = users.filter((user)=> user.id <= 4)
console.log("Some users", someUser.length)
//* The find method looks for a single (first) element that makes the function return true.

//* If there may be many, we can use arr.filter(fn).

//* The syntax is similar to find, but filter returns an array of all matching elements:

//! Transform an array
//() Map

let mapping = users.map(mapped=> mapped);
console.log("Length of each element", mapping.length)

//() Reverse

let arr7 = ['1', '2', '3', '4', '5']
console.log(arr7.reverse())

//() Split and Join
let names = 'Bilbo, Gandalf, Nazgul';
console.log("A Message to ",names)
let splitting = names.split(', ', 2)

for (let name of splitting){
  console.log("A Message to", name)
}

//? The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

//() reduce/reduceRight

//* When we need to iterate over an array – we can use forEach, for or for..of.

//* When we need to iterate and return the data for each element – we can use map.

//* The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

//? let value = arr.reduce(function(accumulator, item, index, array) {
// ?  // ...
//? }, [initial]);

let arr8 = [1, 2, 3, 4, 5];
let sum = arr8.reduce((sum, current)=> sum + current, 0)
console.log(sum)
//! The method arr.reduceRight does the same but goes from right to left.

//() Array.isArray
//* Arrays do not form a separate language type. They are based on objects. So typeof does not help to distinguish a plain object from an array:

console.log(typeof {}); // object
console.log(typeof []); // object (same)

//* …But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.

console.log(Array.isArray({})); //false
console.log(Array.isArray([])); //true