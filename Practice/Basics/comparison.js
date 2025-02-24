console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 == 5); // true
console.log(5 != 5); // false

console.log('-----------');
console.log("5" == 5); // true
console.log("5" === 5); // false
console.log("5" !== 5); //true

console.log('-----------');
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log('*--------------*');
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true === 1); // false
console.log(false === 0); // false

console.log('*--------------*--');
console.log(0 == false); // true
console.log(0 === false); // false

console.log('--*--------------*--');
console.log("apple" > "banana"); // false
console.log("Apple" > "apple"); // false

console.log('--*-------*-------*--');
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true

console.log('--*-------**-------*--');
let a = "10";
let b = 10;
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
