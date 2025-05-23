const users = [
  { id: 1, fullName: "Ravi Sharma", email: "ravi@example.com" },
  { id: 2, fullName: "Anjali Mehta", email: "anjali@example.com" },
  { id: 3, fullName: "Kabir Khan", email: "kabir@example.com" }
];
const newArray = users.map(newArr => {
  const newUsers = {}
  newUsers.name = newArr.fullName
  newUsers.domain = newArr.email.split('@')[1]

  return newUsers
})
console.log(newArray)