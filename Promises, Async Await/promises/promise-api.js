// Types of Promise
// Promise.all
// Promise.allSettled
Promise.all([
  new Promise(resolve => setTimeout(()=> resolve(1), 3000)),
  new Promise(resolve => setTimeout(()=> resolve(2), 2000)),
  new Promise(reject => setTimeout(()=> reject(3), 1000))
]).then(result=> console.log(result))


let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let request = urls.map(url=> fetch(url))
console.log(request)
Promise.all(request).then((response)=> response.forEach(
  response=> console.log(`${response.url}: ${response.status}`)
))