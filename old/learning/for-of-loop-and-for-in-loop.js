'use strict'
const fruits = ['apple', 'mango', 'banana', 'papaya', 'orange']

for(let a of fruits){ //a represent the number of iteration
  console.log(a)
}

const username = "Pratik Soni"
for(let b of username){ 
  console.log(b)
}

const person = { //Object are not iterable using for of loop
  firstName: 'Pratik',
  lastName: 'Soni',
  age: 25,
}

// for(let c of person){
//   console.log("This is object", c.age)
// }

for(let key in person){ //Objecs are iterable using for in loop but its time complexity is high
  console.log(key, ':' ,person[key])
}
