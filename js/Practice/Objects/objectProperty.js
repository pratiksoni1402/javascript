let user = {
  name: 'Pratik',
  age: 25,
  course:{
    batch:2023,
  },
}

Object.defineProperty(user, 'name',{ // object, property, attribute
  configurable: false,
  writable:false,
})

delete user.name
user.name = "Soni"
console.log(user)

