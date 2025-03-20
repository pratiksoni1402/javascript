//() WeakMap
//* The first difference between Map and WeakMap is that keys must be objects, not primitive values:

let newWeakMap = new WeakMap();
let obj = {};
let result = newWeakMap.set(obj, 'value')
console.log("Weak Map", result)

//?Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

let john = {name: 'Pratik'}
let weakMap = new WeakMap();
weakMap.set(john, '...');
john = null; //^ overwrite the reference
//^ john is removed from memory!

//? WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.


//? Compare it with the regular Map example above. Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

//! WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.


//()WeakSet

