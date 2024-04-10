const user = {
  name: "Pratik",
  age: "27",
  address: {
    pincode: 542330,
    phonenumber: 789420153,
    country: "India",
    state: "Rajasthan",
    city: "Jodhpur",
    citizen: {
      nagrikta:"Bhartiya",
    }
  }
}
// Object.seal(user)
// console.log(user['name'])

console.log('nagrikta' in user.address.citizen)
// user.lastname = "Soni"
// console.log(user)