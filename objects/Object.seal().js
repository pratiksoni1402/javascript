// Object.seal()
// Purpose
// Prevents adding or removing properties from the object.
// However, you can still modify the values of existing properties.

const car = {
  brand: "BMW",
  year: 2025,
  model: 'M8 GT',
  interiors:{
    seats: 'Leather Upholstery',
    cruiseControl: 'Enabled',
  },
}
Object.seal(car)
car.interiors.seats = "Hello" // Allowed (Nested objects are not sealed)
car.interiors.test = "testing" // Allowed (Nested objects are not sealed)
car.test = "Hello" // Not Allowed
delete car.brand // Not Allowed
car.brand = 'Mercedes'  // Allowed
console.log(car)

function SealingObject(obj){
 Object.seal(obj)
  for(let key in obj){
    if(
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Object.isSealed(obj[key])
    ){
      SealingObject(obj[key])
    }
  }
}

SealingObject(car)
 car.interiors.add = "Adding" // Will not work
console.log("After Sealing", car)
