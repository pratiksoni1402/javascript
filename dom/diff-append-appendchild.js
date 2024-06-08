//* The return value of append is undefined but return appendChild has return value (the node which is added)

const h6 = document.querySelector('h6')
const container = document.querySelector('.container')

//! This will move the element to defined location
console.log("This is container", container)

//! This will copy the element to desired location cloneNode(true) this will enable deep clone ( text will also be copied), cloneNode() only atribute and element will be copied not text
container.appendChild(h6.cloneNode(true))