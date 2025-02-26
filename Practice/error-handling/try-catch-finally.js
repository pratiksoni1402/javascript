//------------------- Ques-> 1, 2
try {
  console.log(user)
}catch (err){
  console.log(err, "Undefined user")
}finally {
  console.log("Execution Finished")
}
//------------------ Ques-> 3
let string = '{"name":"Pratik", "role":"Frontend Developer"}';
try {
  let conversion = JSON.parse(string)
  console.log(conversion)
}catch (err){
  console.log(err, "Error while parsing JSON")
}
//------------------ Ques-> 4
try {
  name = 'Pratik'
  console.log(undefinedFunction())
}catch (err){
  console.log(err, "Function not defined")
}