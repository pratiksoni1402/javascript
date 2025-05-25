const people = [
  { name: "Ravi", age: 16 },
  { name: "Neha", age: 21 },
  { name: "Anil", age: 17 }
];

function labelAgeGroup(person) {
  return person.age > 18  ? `${person.name} is an Adult} ` : `${person.name} is minor `
}

const ageGroup = people.map(labelAgeGroup)
console.log(ageGroup)