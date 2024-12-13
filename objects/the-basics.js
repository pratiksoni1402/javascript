// Objects are Associative arrays

// let object = new Object() // object constructor syntax
// let obj_2 = {} // object literal syntax
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // multiword property name must be quoted
// }; //For multiword properties, the dot access doesn’t work:
//
// let obj = {
//   0: "test" // same as "0": "test"
// };
//
// // both alerts access the same property (the number 0 is converted to string "0")
// alert( obj["0"] ); // test
// alert( obj[0] ); // test (same property)
//
// let newObj = {};
// newObj.__proto__ = 5;
// console.log(newObj.__proto__)
//
// let userOne = {name: "Pratik"}
// console.log("name" in userOne)
//
// //The for in loop
// //To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.
//
// for(key in object){
//  code goes here
// }

let data = {
  name:"Pratik",
  lastname:"Soni",
  age:25,
  email:"pratik.soni@gmail.com"
}

for(let key in data){
  console.log("Keys", key)
  console.log("Keys", data[key]) // Flip this and find the reason why it is giving undefined
}

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes){
  console.log("code",code) // 1, 41, 44, 49 because integer properties are sorted, other in creation order
}

let temperedCodes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for(let code in temperedCodes){
  console.log("code",code) // 49, 41, 44, 1 now it will be in creating oder
}

let user = {
  name:"john",
  surname:"smith",
}

console.log(user.name)
user.name = "pete"
console.log(user.name)
delete user.name
console.log(user.name)
