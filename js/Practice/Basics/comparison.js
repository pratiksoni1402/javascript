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
console.log(a > b); // false
console.log(a >= b); // true
console.log(a < b); // false
console.log(a <= b); // true

console.log('*--*-------**-------*--*');
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

console.log('*--*-------**-------*--*');
let x = "2";
let y = 1 + x;
console.log(y == 3); // false
console.log(y === 3); //false

console.log('**--*-------**-------*--**');
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); //false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

console.log('**--*-------**-------*--**');
console.log([] == false); // true
console.log([] === false); // false
console.log([0] == false);  // true
console.log([0] === false); // false
console.log([1] == true); // true
console.log([1] === true); // false

console.log('**--*-------**-------*--**');
let obj1 = { value: 10 };
let obj2 = { value: 10 };
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

console.log('**--*-------**-------*--**');
console.log(0 == "\n"); // true
console.log(0 === "\n"); // false
console.log(null == "\n0\n"); // false
console.log(null === "\n0\n"); //false

console.log('**--*-------**-------*--**');
console.log(function(){} == function(){}); // false
console.log(function(){} === function(){}); // false

console.log('**--*-------**-------*--**');
console.log(Symbol('a') == Symbol('a')); //false
console.log(Symbol('a') === Symbol('a')); // false

console.log('**--*-------**-------*--**');
console.log(010 === 10); // false

console.log('**--*-------**-------*--**');
let z = { vzlue: 5 };
let w = z;
console.log(z == w); // true
console.log(z === w); // true
w.vzlue = 10;
console.log(z.vzlue); // 10

console.log('**--*-------**-------*--**');
console.log(null || "Hello"); // Hello
console.log(undefined && "World"); // Undefined
console.log("0" && "Hello"); // Hello
console.log("" || []); // []
console.log([] == true); // false
console.log({} == true); // false

console.log('**--*-------**-------*--**');
console.log(true + false); // 1
console.log([] + []); //
console.log([] + 1); // 1
console.log([1, 2] + [3, 4]); // [1,23,4]
console.log("5" - 3); // 2
console.log("5" + 3); //53

console.log('**--*-------**-------*--**');
let obj = {
  valueOf: () => 10
};
console.log(obj == 10); // true
console.log(obj === 10); // false
