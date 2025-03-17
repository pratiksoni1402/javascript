const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  greet: ()=> {
    return `Hello my name is ${person.name} !`
  }
}

const extraInfo = {
  country: "USA",
  occupation: "Developer"
};

const newObjectMethodOne = Object.assign(extraInfo, person)
const newObjectMethodTwo = Object.assign({}, extraInfo, person)
const newObjectMethodThree = {...person, ...extraInfo}
console.log("Merging into remember extrainfo object will be changed",newObjectMethodOne)
console.log("Using blank target",newObjectMethodTwo)
console.log("Using spread operator",newObjectMethodThree)
