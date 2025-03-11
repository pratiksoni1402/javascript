//() BigInt is a special numeric type that provides support for integers of arbitrary length.

//() A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc.

const bigInt = 1234567890123456789012345678901234567890n
const sameBigInt = BigInt(1234567890123456789012345678901234567890)
console.log("Big Int",typeof bigInt)
console.log("Same Big Int",typeof sameBigInt)

// Math Operators
// BigInt can mostly be used like a regular number, for example:

console.log(1n + 2)