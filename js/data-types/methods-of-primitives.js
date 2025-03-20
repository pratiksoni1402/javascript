// Numbers

let billion1 = 1000000000
console.log(billion1)

let billionOne = 1_000_000_000
console.log(billionOne)

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
console.log(billion)

// In other words, e multiplies the number by 1 with the given zeroes count.

//let 1e3 === 1 * 1000; // e3 means *1000
//let 1.23e6 === 1.23 * 1000000; // e6 means *1000000

//Now let’s write something very small. Say, 1 microsecond (one-millionth of a second):

let mcs = 0.000001;
console.log(mcs)

let mcse = 1e-6; // five zeroes to the left from 1
console.log(mcse)

//Please note that toFixed always returns a string. It ensures that it has 2 digits after the decimal point. That’s actually convenient if we have an e-shopping and need to show $0.30. For other cases, we can use the unary plus to coerce it into a number:

let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3