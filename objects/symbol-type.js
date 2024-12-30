//Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

// Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.
//
//   For instance, this alert will show an error:

//Symbolic properties do not participate in for..in loop.

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123    


//Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle. If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.
//
// In contrast, Object.assign copies both string and symbol properties:


// Revisit Symbols again