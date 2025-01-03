let user = {
  name: 'pratik',
  greet: function (){
    console.log("Testing", this.name)
}
}

let test = user
test.greet()