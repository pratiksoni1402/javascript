const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  greet: ()=> {
    return `Hello my name is ${person.name} !`
  }
}

if(person.hasOwnProperty('country')){
  console.log(true)
}else{
  console.log(false)
}
