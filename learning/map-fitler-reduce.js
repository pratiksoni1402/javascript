// Map Method
// const months = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August']
// months.map((monthNames, index) => (
//   console.log(index, monthNames)
// ))

// Filter
const monthList = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const filterMethod = monthList.filter((list) => {
  return list.includes('a')
})
console.log(filterMethod)

const student = [
  {
    name: 'Pratik',
    age: 26,
  },
  {
    name: 'Hardik',
    age: 26,
  },
  {
    name: 'Naresh',
    age: 27,
  },
  {
    name: 'Tamanna',
    age: 26,
  }
]


const adultStudent = student.filter((test) => {
  return test.age > 26 
})

console.log(adultStudent)
