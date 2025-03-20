let json = '{"age":30}';
try {
  let user = JSON.parse(json)
  if(!user.name){
    throw new SyntaxError("Incomplete Data: name property does not exist")
  }
  console.log(user.name)

}catch(err) {
  if (err instanceof SyntaxError){
  console.log("JSON Error",err)
  }else{
    throw err
  }
}