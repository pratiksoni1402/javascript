//() Iterables

//* Iterable objects are a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop.

//* Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable.

//* If an object isn’t technically an array, but represents a collection (list, set) of something, then for..of is a great syntax to loop over it, so let’s see how to make it work.

//() Symbol.iterator

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next(){
      if (this.current <= this.last){
        return {done:false, value:this.current++};
      }else{
        return {done: true};
      }
    }
  };
};

for (let num of range){
  console.log(num)
}
