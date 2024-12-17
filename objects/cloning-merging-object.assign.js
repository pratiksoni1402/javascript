// Method 1
let user = {
  name:"john",
  age:25,
}

let cloned = {}

for(let key in user){
  cloned[key] = user[key]
}


console.log("cloned",cloned)

// Method 2
//If the copied property name already exists, it gets overwritten:

let target = {
  name:"Pratik",
  age:"26",
}

let source = {
  mobileNumber: 1234567890,
  designation: "Frontend Developer",
}

const returnedObject = Object.assign(target, source)
console.log("Combined Object", returnedObject)

let person = {
  name:"Lorem",
}

let cloning = Object.assign({}, person)
console.log("Cloning", cloning)

let bio = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clonnedData = Object.assign({}, bio);

console.log( bio.sizes === clonnedData.sizes ); // true, same object

// user and clone share sizes
bio.sizes.width = 60;    // change a property from one place
console.log(clonnedData.sizes.width); // 60, get the result from the other one

//To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

const original = {text:"mdn"}
original.itself = original;

const deepClone = structuredClone(original)
console.log(deepClone.text === original.text)
console.log(deepClone !== original)
console.log(deepClone.itself === original)
console.log("This is deepClone",deepClone.itself)

let conversion = JSON.stringify(original)
console.log("conversion", conversion)
//If you try to convert this object to JSON using JSON.stringify(original);, it will throw an error:
//This happens because JSON cannot handle circular references.

//Circular references are useful in data structures like linked lists, trees, and graphs.