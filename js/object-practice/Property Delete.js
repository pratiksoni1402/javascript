let person = {
  'my name': 'pratik',
  age: 26,
  city: 'Jodhpur',
}
console.log("This is person after age deletion", person)

//Immutable Alternatives: If immutability is a concern, you can create a new object without the age property using the spread operator:

const { age, ...newPerson } = person;
console.log("New person object after removal:", newPerson);
