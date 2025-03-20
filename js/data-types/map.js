//() Map

//? Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

//* new Map() – creates the map.
//* map.set(key, value) – stores the value by the key.
//* map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
//* map.has(key) – returns true if the key exists, false otherwise.
//* map.delete(key) – removes the element (the key/value pair) by the key.
//* map.clear() – removes everything from the map.
//* map.size – returns the current element count.

let map = new Map();
//! unlike objects, keys are not converted to strings. Any type of key is possible.

//? Map can also use objects as keys.

let user = {name: 'John'};
let visitCountMap = new Map();
visitCountMap.set(user, 123);
console.log(visitCountMap.get(user))

//* Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.

let john = {name: 'John'};
let ben = {name: 'Ben'};
let visitCount = {};
visitCount[john] = 123
visitCount[john] = 234
console.log(visitCount)

//! How Map compares keys ?
//*To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.
//! This algorithm can’t be changed or customized.

//? Chaining
//?Every map.set call returns the map itself, so we can “chain” the calls:
map.set('name', 'Pratik')
.set(1, '48620')
.set(true, 'yes')
console.log("This is map chaining ", map)

//() Iteration over Map
//? For looping over a map, there are 3 methods:

//* map.keys() – returns an iterable for keys,
//* map.values() – returns an iterable for values,
//* map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let iterateMap = new Map([
  ['cucumber', '500'],
  ['tomatoes', '1000'],
  ['Aalu', '4500'],
]);

for (let vegetables of iterateMap.keys()){
  console.log("Keys", vegetables)
}

for (let price of iterateMap.values()){
  console.log("Values", price)
}

for (let item of iterateMap){
  console.log("Items", item)
}

//? The insertion order is used -> The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

//* Map has a built-in forEach method, similar to Array:

iterateMap.forEach((value, key, map) =>(
  console.log(`Key ${key} - Value ${value}`)
))

//! If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

//() Object.entries: Map from Object
let obj = {
  name: 'Pratik',
  role: 'Frontend Developer',
  exp: '2 years'
}

let newMap = new Map(Object.entries(obj))
console.log(newMap.get('name'))

//? Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.

//() Object.fromEntries: Object from Map

//?There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

let mapToObj = Object.fromEntries([
  ['cucumber', '500'],
  ['tomatoes', '1000'],
  ['Aalu', '4500'],
]);
console.log(mapToObj.Aalu)