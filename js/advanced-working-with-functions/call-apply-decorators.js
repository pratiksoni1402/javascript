
function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func

    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}
//* In the code above cachingDecorator is a decorator: a special function that takes another function and alters its behavior.

slow = cachingDecorator(slow);

console.log( slow(1) ); // slow(1) is cached and the result returned
console.log( "Again: " + slow(1) ); // slow(1) result returned from cache

console.log( slow(2) ); // slow(2) is cached and the result returned
console.log( "Again: " + slow(2) ); // slow(2) result returned from cache

//?  there are several benefits of using a separate cachingDecorator instead of altering the code of slow itself:

//* The cachingDecorator is reusable. We can apply it to another function.
//* The caching logic is separate, it did not increase the complexity of slow itself (if there was any).
//* We can combine multiple decorators if needed (other decorators will follow).