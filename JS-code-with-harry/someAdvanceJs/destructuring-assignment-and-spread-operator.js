// TODO: Destructuring is used to unpack values from an array, or properties from objects, into distinct variables
//Destructuring
let arr = [3, 5, 8, 4, 2, 6, 5];
let [a, b, ...bakiwale] = arr;
console.log(a, b, ...bakiwale);

let arr1 = [3, 5, 8, 4, 2, 6, 5];
let [a1, b1, , , ...bakiwalee] = arr1; // , , this will skip 5, 8 from printing
console.log(a1, b1, ...bakiwalee);

let { a2, b2 } = { a2: 1, b2: 5 };
console.log(a2, b2);

const person = {
    firstName: "Jane",
  };
  
  // Destructuring with default values
  const { firstName, lastName = "Doe" } = person;
  console.log(firstName); // "Jane"
  console.log(lastName); // "Doe" // This will not change the original object
  
  
  const user = {
    name: "Alice",
    info: {
      age: 25,
      address: "123 Main St",
    },
  };
  
  // Destructuring nested objects
  const {
    name,
    info: { age, address },
  } = user;
  
  console.log(name); // "Alice"
  console.log(age); // 25
  console.log(address); // "123 Main St"
  
//Spread Syntax
let arr3 = [2, 4, 67, 8, 45, 767, 3];
let obj1 = { ...arr3 };
console.log(obj1);

let sum = (v1, v2, v3, v4, v5, v6, v7) => {
  return v1 + v2 + v3 + v4 + v5 + v6 + v7;
};
console.log(sum(...arr3));

//
let obj2 = {
  name: "Pratik",
  company: "IGS",
  address: "Sardarpura",
};

// console.log({... obj2, name: "Soni"})
obj2.name = "Soni";
console.log(obj2);


