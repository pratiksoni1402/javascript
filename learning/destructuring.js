const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'indigo']

const user = {
  name: "Pratik",
  age: 25,
  address:{
    city: "Jodhpur",
    street: "Sector-112",
  },
}

const {name, age, address:{city}} = user; //address:{city} multilevel destructuring
console.log(city)