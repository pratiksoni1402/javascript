let student = {
  id:1,
  name:"Pratik",
  marks:80,
}
console.log(student.marks.science)

//Optional Optimization:
// Your code is already optimized and clean. For variety, if you want to practice destructuring, here's an alternative way to access the science score:

const { subject: { science } } = student;
console.log(science);
