const arrayOne = [1, 2, 3, 4, 5]
const arrayTwo = [6, 7, 8, 9, 10]
const newArray = [...arrayOne, ...arrayTwo]
console.log(newArray)

const user = {
  name: 'Pratik',
  age: 26,
}

const updatedUser = {
  ...user,
  city: 'Jodhpur',
}

console.log("This is updated User", updatedUser)

function add(...newArray){
  // console.log(arguments);
  let sum = 0
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}

add(2,5,7,8,65,67,54,)
console.log("This is addition", add())