let object1 = { name: 'pratik', age: 26 };
let object2 = { name: 'pratik', age: 26 };

console.log(object1 == object2); // false
console.log(object1 === object2); // false

//Even though object1 and object2 have the same properties and values, both comparisons return false. This is because they are different instances in memory, so their references are not the same.

//Correct Way to Compare Object Properties:

// If you want to check if two objects have the same properties and values, you need to compare their individual properties. Here's an example using a function to compare two objects deeply:

function areObjectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(areObjectsEqual(object1, object2)); // true
