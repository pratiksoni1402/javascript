//*An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

//* They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.

//* Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.


// !There are two syntaxes for creating an empty array:

let arr = new Array()
let arr1 = []

// Creating Array
let fruits = ['apple', 'banana', 'orange', 'plum']

fruits[4] = 'Hello'
console.log(fruits.length)

//!An array can store elements of any type.

let MixedArray = ['apple', {name:'pratik'}, true, function (){console.log("Function in array")}]

console.log(MixedArray[3])
MixedArray[3]()

//Let’s say we want the last element of the array.
//
// Some programming languages allow the use of negative indexes for the same purpose, like fruits[-1].
//
// Although, in JavaScript it won’t work. The result will be undefined, because the index in square brackets is treated literally.
//
// ? We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].

console.log("sdf", fruits[fruits.length-1])
// Alternative method
console.log("qaz",fruits.at(-1))

//! Methods pop/push, shift/unshift

//? push adds an element to the end.
//? pop takes an element from the end.
//* So new elements are added or taken always from the “end”.


//!For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).

//?In computer science, the data structure that allows this, is called deque.

//! POP
//?Extracts the last element of the array and returns it:

console.log("Popping Element", fruits.pop())
console.log(fruits)

//* Both fruits.pop() and fruits.at(-1) return the last element of the array, but fruits.pop() also modifies the array by removing it.


//! PUSH
//?Append the element to the end of the array:

console.log("Pushing Element in Array", fruits.push('Pomogranate')) //*can add multiple elements at once:
console.log(fruits)

//? The call fruits.push(...) is equal to fruits[fruits.length] = ....


//! SHIFT
//? Extracts the first element of the array and returns it:

console.log("Shifting Array Element", fruits.shift())
console.log("Shifted Array", fruits)


//! UNSHIFT
//? Add the element to the beginning of the array:

console.log("Unshifting Array Element", fruits.unshift("Dragon Fruit")) //*can add multiple elements at once:
console.log("Unshifted Array", fruits)

//?---------------------------------------------------------------------

//!Loops
let arr3 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr3.length; i++) {
  console.log( arr[i] );
}

//* But for arrays there is another form of loop, for..of:
for (let x of fruits){
  console.log("For of Loop", x)
}
//* The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

//! Technically, because arrays are objects, it is also possible to use for..in:

let arr4 = ["Apple", "Orange", "Pear"];

for (let key in arr4) {
  console.log( arr4[key] ); // Apple, Orange, Pear
}

//! But that’s actually a bad idea. There are potential problems with it:

//* The loop for..in iterates over all properties, not only the numeric ones.

//* There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.


//* The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

//! Generally, we shouldn’t use for..in loop for arrays.

let arr5 = [1, 2, 3, 4, 5];

arr5.length = 2; // truncate to 2 elements
console.log( arr5 ); // [1, 2]

arr5.length = 5; // return length back
console.log( arr5 ); // undefined: the values do not return

//* new Array()
//? There is one more syntax to create an array:

let arr6 = new Array("Apple", "Pear", "etc")

//* It’s rarely used, because square brackets [] are shorter. Also, there’s a tricky feature with it.

//* If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.

let arr7 = new Array(2); // will it create an array of [2] ?

console.log( arr7[0] ); // undefined! no elements.

console.log("This is arr7 length", arr7.length ); // length 2

//! Multidimensional arrays

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("This is matrix element multiplication", matrix[0][1] ); // 2, the second value of the first inner array

let cmp1 = ['a', 'b', 'c']
let cmp2 = ['a', 'b', 'c']
console.log("is Equal", cmp1 === cmp2)

//! Two arrays can't be equal unless there address is same