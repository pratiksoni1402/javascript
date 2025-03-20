// ------------- Object Destructuring --------------
let person2 = {
  'my name': 'pratik',
  age: 26,
  city: 'Jodhpur',
}

let {city,'my name':myName} = person2
console.log("Hello", city, myName)
