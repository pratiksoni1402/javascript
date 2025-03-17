const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  greet: ()=> {
    return `Hello my name is ${person.name} !`
  }
}

console.log("Unsealed", person)
const sealedObject = Object.seal(person)
person.city = 'Jodhpur'
person.phoneNumber = 9125482
delete person.city
console.log("Sealed", person)