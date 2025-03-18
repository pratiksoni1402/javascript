const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  greet: ()=> {
    return `Hello my name is ${person.name} !`
  }
}
person.age = 23
const propDisc = Object.defineProperty(person, 'city',{
  enumerable:false,
})
person.age = 230

console.log("Person", Object.keys(propDisc))
console.log("Non Writable",propDisc)
//* In object.freeze() property can neither be deleted nor be added or modified


console.log("Unfrozen", person)
Object.freeze(person)
person.name = 'Pratik'
person.lastName = 'Soni'
delete person.age
console.log("Frozen Object", person)
console.log(Object.isFrozen(person))