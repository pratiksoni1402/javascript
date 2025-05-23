const students = [
  { name: "Aisha", score: 75 },
  { name: "Rahul", score: 85 },
  { name: "Sneha", score: 92 }
];

const results = students.map(student => {
  const grade = (student.score > 80) ? "A" : "B";
  const studentGrades = { ...student, grade };
  return studentGrades;
});

console.log("New array",results);
console.log("Original array",students);
