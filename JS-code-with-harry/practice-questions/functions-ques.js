function blabbermouth() {}
console.log(blabbermouth.name); //Functions have a name property that returns the name of a function. JavaScript functions are objects and can have properties like any other object.

//next ques
var cat = function (x) {
  return x * 2;
};
console.log(cat.name);

//next ques
function c(f) {
  //The c() function takes a callback function as a parameter. blub is passed to c() as an argument and is invoked within the body of c().
  //Functions are "first class" in JavaScript because they can be passed as parameters and stored in data structures.
  return f();
}
function blub() {
  return "monsters";
}
c(blub);

//next ques
let a = [32, 1, 44, 9].sort(function (x, y) {
  //The sort() method takes an anonymous callback function as a parameter.
  return x - y;
});
console.log(a);

//next ques
function ab(x, y, z) {
  //When too few arguments are supplied to a function, JavaScript assigns the missing arguments to undefined.
  return z;
}
console.log(ab("blah"));

//next question
love_story = function (x, y) {
  //Arguments is an array-like object that corresponds with the parameters that are passed into a function.
  console.log(arguments);
};
love_story("princess", "frog");

//next question
function foo() { //The bar() method is hoisted to the top of the foo() method, so it can be called before it's defined.
  return bar();
  function bar() {
    return "Poppin' bottles";
  }
}
console.log(foo());

//next question
blah = function () {
    return lala; //This raises a ReferenceError because the lala variable cannot be returned before it's defined.
    lala = "hi";
  };
  console.log(blah());

  //next question
  function sum() {
    result = 0; /*This code raises an error because arguments is an array-like object, but it's not actually an array, so we can't use the forEach() method. According to Douglas Crockford, having arguments as an array-like object and not an actual array is a design flaw in the language.
    */
    arguments.forEach(function (num) {
      result += num;
    });
    return result;
  }
  sum(1, 2, 3);

  // testing commit
  hkjh

  