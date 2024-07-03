// Map Method
// const months = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August']
// months.map((monthNames, index) => (
//   console.log(index, monthNames)
// ))

// Filter
// const monthList = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// const filterMethod = monthList.filter((list) => {
//   return list.includes('a')
// })
// console.log(filterMethod)

// const student = [
//   {
//     name: 'Pratik',
//     age: 26,
//   },
//   {
//     name: 'Hardik',
//     age: 26,
//   },
//   {
//     name: 'Naresh',
//     age: 27,
//   },
//   {
//     name: 'Tamanna',
//     age: 26,
//   }
// ]

// const adultStudent = student.filter((test) => {
//   return test.age > 26 
// }).map((list) => {
//   return list.name
// })
// console.log(adultStudent)

//Reduce
// Example
const nums = [1, 2, 3, 4, 5, 6]
const sum = nums.reduce((counting, numElement, index) => { //First Parameter is called accumalator and seconds parameter is current value
  console.log(index, counting)
  return (counting + numElement)
}, 0)

console.log("This is nums = ", nums)
console.log("This is sum = ", sum)
// End

// Another Example
const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const merge = nestedArray.reduce((accumalator, currentValue) => {
  return accumalator.concat(currentValue)
})
console.log("This array is concatenated", merge)
// End

// More Complex Example
const names = ['Pratik', 'Rakesh', 'Praveen', 'Pratik', 'Naresh', 'Hardik', 'Hardik']

const nameCount = names.reduce((accumulator, currentValue) => {
  if(currentValue in accumulator) {
    accumulator[currentValue]++
  }else{
    accumulator[currentValue] = 1;
  }
  return accumulator
}, {})

console.log("This is name count", nameCount);
