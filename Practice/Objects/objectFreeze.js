const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  greet: ()=> {
    return `Hello my name is ${person.name} !`
  }
}
person.name = 'lorem'
const propDisc = Object.defineProperty(person, 'name',{
  configurable:false,
  value:'Hello',
})
delete person.name

console.log("Non Writable",propDisc)
// console.log("Trying to delete", Object.keys(propDisc))
//* In object.freeze() property can neither be deleted nor be added or modified


console.log("Unfrozen", person)
Object.freeze(person)
person.name = 'Pratik'
person.lastName = 'Soni'
delete person.age
console.log("Frozen Object", person)
console.log(Object.isFrozen(person))