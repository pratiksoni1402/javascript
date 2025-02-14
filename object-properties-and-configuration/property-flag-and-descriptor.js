
//() Property flags and descriptors

//? Property flags
//? Object properties, besides a value, have three special attributes (so-called “flags”):
//* writable – if true, the value can be changed, otherwise it’s read-only.
//* enumerable – if true, then listed in loops, otherwise not listed.
//* configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

//?The syntax is:
//* let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

//? obj
//* The object to get information from.

//? propertyName
//* The name of the property.

//* The returned value is a so-called “property descriptor” object: it contains the value and all the flags.

let user = {
  name: 'John'
}

Object.defineProperty(user, 'name',{
  writable: false
})
user.name = "Pratik"
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log("This is descriptor", JSON.stringify(descriptor, null,2))

//? To change the flags, we can use Object.defineProperty.

//? The syntax is:
//* Object.defineProperty(obj, propertyName, descriptor)

let user2 = {}
Object.defineProperty(user2, 'name', {
  value: 'Pratik'
});

let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name')
console.log("This is descriptor2", JSON.stringify(descriptor2, null, 2));

//() Non-enumerable
//* a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in

let user3 = {
  name: 'John',
  toString(){
    return this.name
  }
}

Object.defineProperty(user3, 'toString',{ //set enumerable:false. Then it won’t appear in a for..in loop,
  enumerable: false
})

for (let key in user3){
  console.log("This is key in user3", key)
}

//!Non-enumerable properties are also excluded from Object.keys
console.log(Object.keys(user3))

//() Non-configurable
//* A non-configurable property can’t be deleted, its attributes can’t be modified.

let descriptor3 = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log("This is descriptor3", descriptor3)

//!Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.