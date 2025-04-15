document.body.myData = {
  name: 'Pratik Soni',
  title: 'Frontend Engineer'
}

alert(document.body.myData.title)

//* Adding Method
document.body.setMethod = function (){
  alert(this.tagName)
}
document.body.setMethod()


//* Modify built-in prototypes like Element.prototype
Element.prototype.sayHi = function(){
  alert(`Hello i am ${this.tagName}`)
}

document.documentElement.sayHi()
document.body.sayHi()

//() HTML attributes

alert(document.body.hasAttribute('something'))
alert(document.body.getAttribute('something'))

alert( elem.getAttribute('About') ); // (1) 'Elephant', reading

elem.setAttribute('Test', 123); // (2), writing

alert( elem.outerHTML ); // (3), see if the attribute is in HTML (yes)

for (let attr of elem.attributes) { // (4) list all
  alert( `${attr.name} = ${attr.value}` );
}