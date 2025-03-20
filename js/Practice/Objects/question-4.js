//() Write a function that takes an object and returns a shallow copy of it.
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  address:{
    street: 'Sector 7',
    city: 'Jodhpur',
    zipCode: '342009'
  }
}

function originalObject(obj){
  return structuredClone(obj)
}
console.log("Deep Copy", originalObject(person))
