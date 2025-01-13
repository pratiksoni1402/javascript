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
map.set('name', 'Pratik')
map.set(1, '35715948620')
map.set(true, 'yes')
console.log("This is map", map)

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
