// Accessing characters
// To get a character at position pos, use square brackets [pos] or call the method str.at(pos). The first character starts from the zero position:

let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.at(0) ); // H

// the last character
console.log( str[str.length - 1] ); // o
console.log( str.at(-1) );

//As you can see, the .at(pos) method has a benefit of allowing negative position. If pos is negative, then it’s counted from the end of the string.
//
// So .at(-1) means the last character, and .at(-2) is the one before it, etc.
//
// The square brackets always return undefined for negative indexes, for instance:

let stri = `Hello`;

console.log( stri[-2] ); // undefined
console.log( stri.at(-2) ); // l

//We can also iterate over characters using for..of:
for (let a of "Hello"){
  console.log(a)
}

//Strings are immutable
// Strings can’t be changed in JavaScript. It is impossible to change a character.

let string = 'Hi';

string[0] = 'h'; // error
console.log( string[0] ); // doesn't work

let mutate = 'hi'
console.log("Mutating", mutate[1])

mutate = 'H' + mutate[1]
console.log("After Mutating", mutate)

//Searching for a substring
// There are multiple ways to look for a substring within a string.

// str.indexOf
// The first method is str.indexOf(substr, pos).

// It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

let Substr = 'Widget with id';

console.log( Substr.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( Substr.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( Substr.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

let substring = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = substring.indexOf(target, pos);
  if (foundPos === -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}