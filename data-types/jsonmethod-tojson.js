let user = {
  name: 'Pratik',
  age: 30,
  toString() {
    return `name: ${this.name} age: ${this.name}`
  }
}

console.log(user)

//() JSON.stringify
//* The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is described as in RFC 4627 standard. Initially it was made for JavaScript, but many other languages have libraries to handle it as well. So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.

//* JavaScript provides methods:

//* JSON.stringify to convert objects into JSON.
//* JSON.parse to convert JSON back into an object.

let student = {
  name: 'Pratik',
  age: 26,
  Programm: "MCA",
  courses: ['HTML, CSS, JS, REACT, TAILWIND'],
  spouse: null,
}

let conversion = JSON.stringify(student)
console.log(typeof conversion)
console.log("Converted to string", conversion)

let toObj = JSON.parse(conversion)
console.log(typeof toObj)
console.log("Converted to obj", toObj)


//? The method JSON.stringify(student) takes the object and converts it into a string.

//* The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.

//? Please note that a JSON-encoded object has several important differences from the object literal:

//* Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".

//* Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.

//* JSON.stringify can be applied to primitives as well.

//? JSON supports following data types:
//
//?   Objects { ... }
//? Arrays [ ... ]
//? Primitives:
//?   strings,
//?     numbers,
//?     boolean values true/false,
//?   null.

// a number in JSON is just a number
console.log( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

//* JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

//? Namely:
//* Function properties (methods).
//* Symbolic keys and values.
//* Properties that store undefined.

let user1 = {
  name: 'John',
  age: 23,
  sayHi() { // ignored
    console.log("Hi")
  },
  [Symbol('id')]:23, // ignored
  something: undefined, // ignored
}

console.log("User 1 before strigified", user1)
let objConversion = JSON.stringify(user1)
console.log("User 1 after strigified", objConversion)

//* nested objects are supported and converted automatically.

let nestedObj = {
  name: 'John',
  age: 23,
  car: {
    modal:"BMW",
    make:2025,
  },
}
console.log("This is object", nestedObj)
let convertObj = JSON.stringify(nestedObj)
console.log("This is object", convertObj)

//! The important limitation: there must be no circular references.

let room = {
  number:23,
}

let meetup = {
  venue: "Lorem Ipsum"
}

meetup.place = room
// room.occupiedBy = meetup

console.log(JSON.stringify(room))

//() Excluding and transforming: replacer

//? The full syntax of JSON.stringify is:
//*  let json = JSON.stringify(value[, replacer, space])

let room3 = {
  number: 10,
}

let meeting ={
  name:'Pratik',
  participants: ['item1, item2'],
  location: room3 // Referencing Room 3
}

room3.moto = meeting // Referencing Meeting this will create a circular reference

console.log("Stringifying Meeting", JSON.stringify(meeting, ['name', 'participants']))