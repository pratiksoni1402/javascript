//A function that is a property of an object is called its method.
                                //or
//Functions that are stored in object properties are called “methods”.
let user = {
  name: "Pratik",
  age: 26
}

 user.sayHi = function (){
  console.log('Hello')
}

user.sayHi();

// Method 2

let method1 = {

}

function sayHello(){
  console.log("Say Hello inside function")
}

method1.sayHello = sayHello

method1.sayHello()

// Method 3

// these objects do the same
let method = {
  sayHi: function() {
    alert("Hello");
  }
}

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};

//this method

let user2 = {
  name:"Pratik",
  age:26,
  sayMethod(){
    console.log("Use of this",this.name)
  }
}

user2.sayMethod()