//() Object.keys, values, entries
//?In the previous chapter we saw methods map.keys(), map.values(), map.entries().

//? These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.

//? They are supported for:

//^ Map
//^ Set
//^ Array
//? Plain objects also support similar methods, but the syntax is a bit different.

//? For plain objects, the following methods are available:
//^ Object.keys(obj) – returns an array of keys.
//^ Object.values(obj) – returns an array of values.
//^ Object.entries(obj) – returns an array of [key, value] pairs.

//! The first difference is that we have to call Object.keys(obj), and not obj.keys().

//!The second difference is that Object.* methods return “real” array objects, not just an iterable. That’s mainly for historical reasons.

let user = {
  name: 'Pratik',
  age:23,
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

for (let y of Object.values(user)){
  console.log("Looping", y)
}

for (let i in user){
  console.log("Looping over values", user[i])
}

//() Transforming Objects

//* Objects lack many methods that exist for arrays, e.g. map, filter and others.

//* If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

//* Use Object.entries(obj) to get an array of key/value pairs from obj.

//* Use array methods on that array, e.g. map, to transform these key/value pairs.

//* Use Object.fromEntries(array) on the resulting array to turn it back into an object.



let price = {
  banana: 200,
  apple: 350,
  pomo: 1000,
}

let doublePrice = Object.fromEntries(
  Object.entries(price).map(entries =>[ entries[0], entries[1] * 2])
)

console.log("Double price", doublePrice)