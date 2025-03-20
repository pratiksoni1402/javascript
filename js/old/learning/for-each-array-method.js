const fruits = ['array', 'apple', 'banana', 'orange']
fruits.forEach(function(arrayElements){
  console.log(arrayElements)
})

// ! When a function is passed inside other function then in which function it is passed it is called higher order function

const friends = ['pratik', 'hardik', 'naresh', 'tamanna', 'pooja Dewasi', 'pooja thakur']
friends.forEach((nameList) => (console.log(nameList)))
