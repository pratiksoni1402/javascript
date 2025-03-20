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
console.log(person.address.city)
let stringify = JSON.stringify(person)
console.log("Stringifies",stringify)
console.log("To JSON",JSON.parse(stringify))