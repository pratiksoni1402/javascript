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

//() Swap variables trick
//* There’s a well-known trick for swapping values of two variables using a destructuring assignment:

let guest = "Pete";
let admin = "Jane";

[guest, admin] = [admin, guest]
console.log("This is guest account", guest)
console.log("This is admin account", admin)

//()The rest ‘…’

//* Usually, if the array is longer than the list at the left, the “extra” items are omitted.
//* For example, here only two items are taken, and the rest is just ignored:
let [name1, name2, ...rest] = ['Pratik', 'Frontend', 'Rakesh', 'Jalani', 'Vaibhav']
console.log("name 1", name1)
console.log('name 2', name2)
console.log('rest all', rest)
//* The value of rest is the array of the remaining array elements.
//* We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.

//() Default values

//? If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined:
let [firstName, surname] = [];

console.log(firstName); // undefined
console.log(surname); // undefined

//! If we want a “default” value to replace the missing one, we can provide it using =:
let [slang="Guest", admin1="Pratik" ] = []
console.log(slang, admin1)

//() Object destructuring
//* The destructuring assignment also works with objects.
let options = {
  title1: "Menu"
};

let {width: w = 100, height: h = 200, title1} = options;

console.log(title);  // Menu
console.log(w);      // 100
console.log(h);      // 200


let options1 = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title2, ...rest2} = options1;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest2.height);  // 200
console.log(rest2.width);   // 100


//() Nested destructuring
//* If an object or an array contains other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

//* In the code below options has another object in the property size and an array in the property items. The Pattern on the left side of the assignment has the same structure to extract values from them:

let options2 = {
  size:{
    width: 200,
    height: 400,
  },
  items: ["Hello", "Worlds"],
  extra: true
}

let {
  size:{
    width,
    height,

  },
  items = ["A1",  "A2"],
  title4=  'Hello',
} = options2;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut
console.log(item2);  // Donut