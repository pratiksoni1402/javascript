// --------------------Dynamic Property Access---------------

let student2 = {
  name: 'pratik',
  age: 26,
  city: 'Jodhpur',
  subject:{
    math:80,
    english:90,
    science:80,
  }
}

let x = 'english'
console.log("Dynamic Property Access", student2.subject[x])

//Optional Optimization:
// Your code is clean and doesn't need further optimization. However, for educational purposes, here's a scenario where you might dynamically iterate over multiple properties:

let keys = ['math', 'english', 'science'];
keys.forEach(subject => {
  console.log(`${subject}: ${student2.subject[subject]}`);
});
