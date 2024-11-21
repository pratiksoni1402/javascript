// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
//
//   In other words, strings are compared letter-by-letter.
//
//   For example:

// console.log( 'Z' > 'A' ); // true
// console.log( 'Glow' > 'Glee' ); // true
// console.log( 'Bee' > 'Be' ); // true
//
// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.
//
//   For example:

// console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

let a = 0;
// console.log( Boolean(a) ); // false

let b = "0";
// console.log( Boolean(b) ); // true

// console.log(a == b); // true!

let a = 5 > 4 // true
let b = "apple" > "pineapple" // false
let c = "2" > "12" // false //Wrong answer dictionary comparison, first char "2" is greater than the first char "1".
let d = undefined == null // true //
let e = undefined === null // false
let f = null == "\n0\n" // true // Wrong answer null only equals undefined.
let g = null === +"\n0\n" // false