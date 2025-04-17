// document.body.myData = {
//   name: 'Pratik Soni',
//   title: 'Frontend Engineer'
// }
//
// alert(document.body.myData.title)
//
// //* Adding Method
// document.body.setMethod = function (){
//   alert(this.tagName)
// }
// document.body.setMethod()
//
//
// //* Modify built-in prototypes like Element.prototype
// Element.prototype.sayHi = function(){
//   alert(`Hello i am ${this.tagName}`)
// }
//
// document.documentElement.sayHi()
// document.body.sayHi()
//
// //() HTML attributes
//
// alert(document.body.hasAttribute('something'))
// alert(document.body.getAttribute('something'))
//
// alert( elem.getAttribute('About') ); // (1) 'Elephant', reading
//
// elem.setAttribute('Test', 123); // (2), writing
//
// alert( elem.outerHTML ); // (3), see if the attribute is in HTML (yes)
//
// for (let attr of elem.attributes) { // (4) list all
//   alert( `${attr.name} = ${attr.value}` );
// }

let input = document.querySelector('input')
console.log(input)
input.setAttribute('value', 'newId')
input.value = "newValue"
console.log(input.getAttribute('value'))

let link = document.querySelector('a')
console.log(link)
let gta = link.getAttribute('href')
console.log(gta)
console.log(a.href)

let user = {
  name:"Pratik",
  age:25,
}

for(let div of document.querySelectorAll('[show-info]')){
  let field = div.getAttribute('show-info');
  div.innerHTML = user[field];
}

//() Data Order State
//* All attributes starting with “data-” are reserved for programmers’ use. They are available in the dataset property.
let z = document.getElementById('test')
console.log(z.dataset.about)

//* Multiword attributes like data-order-state become camel-cased: dataset.orderState.