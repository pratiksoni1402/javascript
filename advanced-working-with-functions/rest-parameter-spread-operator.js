//() Many JavaScript built-in functions support an arbitrary number of arguments.

//? For instance:
//? Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.
//? Object.assign(dest, src1, ..., srcN) – copies properties from src1..N into dest.
//? …and so on.

function showName(firstName, lastName, ...titles) {
  console.log( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log( titles[0] ); // Consul
  console.log( titles[1] ); // Imperator
  console.log( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

//! The rest parameters must be at the end
// *The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

function f(arg1, ...rest) { // arg2 after ...rest ?!
                                  // error
}
//* The ...rest must always be last.

//() The “arguments” variable

//* There is also a special array-like object named arguments that contains all arguments by their index.

function showName() {
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );

  // it's iterable
  // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

//? In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function. And it still works, we can find it in the old code.

//? But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods, so we can’t call arguments.map(...) for example.

//? Also, it always contains all arguments. We can’t capture them partially, like we did with rest parameters.

//() Arrow functions do not have "arguments"
//* If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

// ?Here’s an example:
  function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
  }

f(1); // 1
//* As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.

//() Spread syntax

//? It looks similar to rest parameters, also using ..., but does quite the opposite. When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

//* can even combine the spread syntax with normal values:
let arr = [3,4,55,67];
let arr2 = [4,6,78,4,8,7];
console.log("Maximum value of an arr", Math.max(1, 7,...arr, ...arr2, 6,8,100))


//* Also, the spread syntax can be used to merge arrays:
let mergedArray = [...arr, ...arr2]
console.log("Merged Array", mergedArray)

let string = 'Pratik';
console.log("Character", ...string)

let str = "Hello";

// Array.from converts an iterable into an array
console.log( Array.from(str) ); // H,e,l,l,o
//? The result is the same as [...str].
//? But there’s a subtle difference between Array.from(obj) and [...obj]:
//? Array.from operates on both array-likes and iterables.
//? The spread syntax works only with iterables.
//? So, for the task of turning something into an array, Array.from tends to be more universal.

//() Copy an array/object
let arr3 = [1, 2, 3];

let arrCopy = [...arr3]; // spread the array into a list of parameters
                                  // then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr3) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log(arr3 === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr3.push(4);
console.log(arr3); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3

//* Note that it is possible to do the same thing to make a copy of an object:
 let obj = { a: 1, b: 2, c: 3 };
 let objCopy = { ...obj }; // spread the object into a list of parameters
                           // then return the result in a new object
 // do the objects have the same contents?
 console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}


//()Summary

//* When we see "..." in the code, it is either rest parameters or the spread syntax.

//? There’s an easy way to distinguish between them:
//* When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
//* When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.

//? Use patterns:
//* Rest parameters are used to create functions that accept any number of arguments.
//* The spread syntax is used to pass an array to functions that normally require a list of many arguments.

//? Together they help to travel between a list and an array of parameters with ease.
//? All arguments of a function call are also available in “old-style” arguments: array-like iterable object.