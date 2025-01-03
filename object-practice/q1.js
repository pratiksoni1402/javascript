let person = {
  'my name': 'pratik',
  age: 26,
  city: 'Jodhpur',
  greet: function (){
    console.log("Hello my name is", this['my name'])
  }
}


person.greet()
console.log(person['my name'])

person.hobby = 'Programming'
console.log(person)

function Iterate(student){
//   Looping through obeject
  for (let x in student){
    console.log(`Key in Object ${x} Value in Object ${student[x]}`)
  }
}

let student = {
  id:1,
  name:"Pratik",
  marks:80,
}
Iterate({
  id:1,
  name:"Pratik",
  marks:80,
})
// console.log(student.marks.science)

for(let key in student){
  console.log("Key", key + ' ' + 'Value', student[key])
}

// ------------- Object Destructuring --------------
let person2 = {
  'my name': 'pratik',
  age: 26,
  city: 'Jodhpur',
}

let {city,'my name':myName} = person2
console.log("Hello", city, myName)

// --------------------Dynamic Property Access---------------
let student2 = {
  name: 'pratik',
  age: 26,
  city: 'Jodhpur',
  subject:{
    math:80,
    english:90,
    science:80,
  }
}

let x = 'english'
console.log("Dynamic Property Access", student2.subject[x])

// -------------- Merging Objects -------------
const address = { street: "Main St", city: "New York" };
const contact = { phone: "1234567890", email: "example@example.com" };

const ObjectMerge = Object.assign({}, address, contact)
console.log("Merging two objects", ObjectMerge)

// ------------- Deleting Properties -------------
delete person.age
console.log("This is person after age deletion", person)

// --------------- Default Properties -------------------

function PropertyCheck(a, b){

}

let Newcity = 'Jaipur'
PropertyCheck(student2, Newcity)
