// Object.freeze()
//Purpose
// Prevents any changes to the object.
// The object becomes immutable:
// You cannot add new properties.
// You cannot delete existing properties.
// You cannot modify existing properties' values.
// You cannot reconfigure property descriptors (e.g., make a property writable or enumerable).

const user = {
  name: 'Pratik',
  age:26,
  designation: 'Frontend Developer',
  academics:{
    bca: 'LMC',
    year:2019,
  },
}

Object.freeze(user)
user.name = "Soni"
delete user.age
user.academics.year = 2025 //Allowed (nested object is not frozen)
console.log(user)
console.log(Object.isFrozen(user))

//Deep Freeze
// Object.freeze() is shallow.
// Nested objects inside a frozen object can still be modified.

function deepFreezing(obj){
  Object.freeze(obj)
  for(let key in obj){
    if(typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Object.isFrozen(obj[key])

    ){
      deepFreezing(obj[key])
     }
  }
}

deepFreezing(user)

user.academics.year = 2030
console.log('After Freezing', user)
