const getAttribute = document.querySelector('h1').getAttribute('class')
console.log("Get Attribute", getAttribute)

const setAttribute = document.querySelector('h1').setAttribute('title', 'Hello World')
console.log("Set Attribute", setAttribute)

//
const setIdAttribute =document.querySelector('h1').setAttribute('id', 'heading2')

//Same as Above
const Byid = document.querySelector('h1').id = 'heading'

