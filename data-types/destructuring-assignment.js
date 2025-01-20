//() Destructuring assignment
//! The two most used data structures in JavaScript are Object and Array.

//* Objects allow us to create a single entity that stores data items by key.

//* Arrays allow us to gather data items into an ordered list.

//* However, when we pass these to a function, we may not need all of it. The function might only require certain elements or properties.

//* Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

//* Destructuring also works well with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

let arr1 = ['John', 'Smith']
let [firstname, lastname] = arr1
console.log(firstname, lastname)

//?Now we can work with variables instead of array members.
//? It looks great when combined with split or other array-returning methods:

let [fname, lname] = "Pratik Soni".split(" ")
console.log(fname)
console.log(lname)

let [peopleName, , , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(title)