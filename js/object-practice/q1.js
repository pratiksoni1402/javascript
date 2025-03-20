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












