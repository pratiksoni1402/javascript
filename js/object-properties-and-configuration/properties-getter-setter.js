//() Property getters and setters

//? There are two kinds of object properties.

//* The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

//* The second type of property is something new. It’s an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

//! In an object literal they are denoted by get and set:

let obj = {
  get propName(){
    // getter, the code executed on getting obj.propName
  },
  set propName(value){
    // setter, the code executed on setting obj.propName
  },
}

let user = {
  name: 'Pratik',
  surName: 'Soni',
  get fullName(){
    return `${this.name} ${this.surName}`
  },
  set fullName(value){
    return [this.name, this.surName] = value.split(' ');
  }
};
user.fullName = 'John Smith'
console.log("Use of getter property", user.fullName)
console.log("Name", user.name)
console.log("Surname", user.surName)

//() Accessor descriptors
//? Descriptors for accessor properties are different from those for data properties.

//* For accessor properties, there is no value or writable, but instead there are get and set functions.

//? That is, an accessor descriptor may have:

//* get – a function without arguments, that works when a property is read,
//* set – a function with one argument, that is called when the property is set,
//* enumerable – same as for data properties,
//* configurable – same as for data properties.

//? For instance, to create an accessor fullName with defineProperty, we can pass a descriptor with get and set: