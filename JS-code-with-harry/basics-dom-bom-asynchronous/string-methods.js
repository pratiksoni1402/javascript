//string methods
let namee = "the quick brown fox jumps over the lazy dog";
console.log(namee.toUpperCase());
console.log(namee.slice(2, 7));
console.log("-----------------------------------------");

//concat
let f1 = "Pratik";
let f2 = "Soni";
console.log(f1.concat(" is the first name of ", f2));
console.log("-----------------------------------------");

//trimming

let trimm = "pratik";
// console.log(trimm)
// console.log(trimm.trim())

for (let str = 0; str < trimm.length; str++) {
    console.log(str);
}
console.log("-----------------------------------------");
console.log('har"'.length);
console.log("-----------------------------------------");

let strin = "Please give Rs 1000";
console.log(strin.slice(15, 19));

console.log("-----------------------------------------");

let str2 = "The quick brown fox jumps over the lazy dog";
console.log(str2.includes("the")); //Check for inclusivity of word
console.log("-----------------------------------------");

str2[2] = "V"; //strings are immutable
console.log(str2);
console.log("");


