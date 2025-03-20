function Iterate(student){
//   Looping through obeject
  for (let x in student){
    console.log(`Key in Object ${x} Value in Object ${student[x]}`)
  }
}


Iterate({
  id:1,
  name:"Pratik",
  marks:80,
})

//Optional Optimization:
// If you'd like to use ES6 features for a modern approach, you can use Object.entries with a for...of loop:

function Iterate(student) {
  for (const [key, value] of Object.entries(student)) {
    console.log(`Key in Object: ${key}, Value in Object: ${value}`);
  }
}

Iterate({
  id: 1,
  name: "Pratik",
  marks: 80,
});


//This approach is often preferred for readability and works seamlessly with modern JavaScript.