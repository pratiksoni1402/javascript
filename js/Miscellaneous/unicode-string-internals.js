//* JavaScript allows us to insert a character into a string by specifying its hexadecimal Unicode code with one of these three notations:

//() \xXX
//? XX must be two hexadecimal digits with a value between 00 and FF, then \xXX is the character whose Unicode code is XX.

//?   Because the \xXX notation supports only two hexadecimal digits, it can be used only for the first 256 Unicode characters.

//?   These first 256 characters include the Latin alphabet, most basic syntax characters, and some others. For example, "\x7A" is the same as "z" (Unicode U+007A).

console.log('\xA9');

//* Surrogate Pairs
//? So rare symbols that require more than 2 bytes are encoded with a pair of 2-byte characters called “a surrogate pair”.

console.log( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
console.log( '😂'.length ); // 2, FACE WITH TEARS OF JOY
console.log( '𩷶'.length );