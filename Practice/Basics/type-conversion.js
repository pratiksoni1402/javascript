let a = (String(123))
console.log(a, typeof a)

let b = (Number('123'))
console.log(b, typeof b)

let c = (Boolean(0))
console.log(c, typeof c)

let d = (Number(null))
console.log(d, typeof d)

let e = (Number(undefined))
console.log(e, typeof e)

let f = (Number(true))
console.log(f, typeof f)

let g = (Number(false))
console.log(g, typeof g)

let h = (String(undefined))
console.log(h, typeof h)


let i = (String(null))
console.log(i, typeof i)

//() Implicit Type Conversion (Type Coercion)
console.log('------------------------------------')
console.log("5" - 3); //2
console.log("5" + 3); //53
console.log("5" * "2"); //10
console.log(5 + true); //6
console.log("5" - true); //4

console.log('---------cmp------------')
console.log(typeof null)
console.log(null === 0)
console.log('---------cmp------------')

//* "When comparing null and 0, null == 0 returns false because null is only equal to undefined but not to any number. null === 0 also returns false because they have different types (null vs. number)."

//() What will console.log([] + {}) and console.log({} + []) output?
console.log([] + {})
console.log({} + [])

console.log('----------------Explicit Type Conversion-------------')
console.log(Number(" 123 ")); //123
console.log(Number("123abc")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log('----------------Explicit Type Conversion-------------')
let j = 10
console.log(typeof `${j}`)

//() What is the difference between parseInt() and Number() for type conversion?

console.log(parseInt("123.45"));  // 123  (Extracts only integer part)
console.log(Number("123.45"));    // 123.45  (Converts fully)

console.log(parseInt("123abc"));  // 123  (Ignores 'abc')
console.log(Number("123abc"));    // NaN  (Invalid number)

console.log(parseInt("abc123"));  // NaN  (No valid number at start)
console.log(Number("abc123"));    // NaN  (Completely invalid)
console.log(Number("23a4bc123"));    // NaN  (Completely invalid)

//() Unexpected Type Coercion
console.log('--1--',[] + []); // blank An empty array ([]) converts to an empty string ("").
console.log('--2--',[] + {}); // [object object]
console.log('--3--',{} + {}); // [object object] [object object]
console.log([1,2,3] + [4,5,6]);  // 1, 2, 34, 5, 6

//() Type Conversion in Comparisons
console.log('--TCC1--',null == undefined); // true null is only equal to undefined and nothing else.

console.log('--TCC2--',null === undefined); // false It checks both the value and the type.
console.log('--TCC3--',0 == false); // true
console.log('--TCC4--',0 === false); // false
console.log('--TCC5--'," \t\n" == 0); // true a string containing only whitespace converts to 0 when used in a numeric context:

//()  Implicit vs Explicit Conversion
//? Which values will evaluate to true and which to false when converted to a boolean?
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(' '));
console.log(Boolean(null));
console.log(Boolean(undefined)); //false
console.log(Boolean("false"));   //false