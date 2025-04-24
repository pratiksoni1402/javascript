const freezeObj = {
  name: 'Pratik',
  age: 25,
  course:'mca',
  contact:{
    email:'pratik@gmail.com',
    phoneNumber: 9513574862,
  },
}

Object.freeze(freezeObj)
console.log("Parent",freezeObj)
console.log("Nested",freezeObj.contact)

// Deep freeze

function deepFreeze(obj){
  if (typeof obj !== 'object' || obj === null) return
  Object.freeze(obj)
  for(let key in obj){
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && !Object.isFrozen(obj[key]) &&
      obj[key] !== null){
      deepFreeze(obj[key])
    }
  }
}

deepFreeze(freezeObj)
freezeObj.contact.email = 'lorem@gmail.com'
console.log()