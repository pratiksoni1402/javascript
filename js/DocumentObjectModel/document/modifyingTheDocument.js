//() creating tag Insertion methods
let div = document.createElement('div')
div.className = 'alert'
div.innerHTML = '<strong>Inserted in DOM</strong> using JavaScript.'
document.body.append(div)
setTimeout(()=> div.remove(), 2000);

//() insertion in DOM
let textNode = document.createTextNode('This is text node.')

ol.before('before')
ol.after('after')

let liFirst = document.createElement('li')
liFirst.innerHTML = 'prepend'
let appndChild = liFirst.innerHTML = 'Append Child'
ol.appendChild(appndChild)
ol.prepend(liFirst)

let liLast = document.createElement('li')
liLast.innerHTML = 'append'
ol.append(liLast)

//() insertAdjacentHTML/Text/Element
div.insertAdjacentHTML('beforebegin', '<p>Hello</p>')
div.insertAdjacentHTML('afterend', '<p>Bye</p>');


//? The method has two brothers:
//* elem.insertAdjacentText(where, text) – the same syntax, but a string of text is inserted “as text” instead of HTML,
//* elem.insertAdjacentElement(where, elem) – the same syntax, but inserts an element.

// document.body.insertAdjacentHTML('"afterbegin", `<div class="alert">\n' +
//   '    <strong>Hi there!</strong> You\'ve read an important message.\n' +
//   '  </div>`')

//() Node Removal
//* To remove a node there is a method called node.remove()

second.after(first)

//() Cloning nodes: cloneNode

//* The call elem.cloneNode(true) creates a “deep” clone of the element – with all attributes and subelements. If we call elem.cloneNode(false), then the clone is made without child elements.

let div2 = div.cloneNode(true)
div2.querySelector('strong').innerHTML('Bye There!')
div.after(div2)

//() parentElem.insertBefore(node, nextSibling)
let newli = document.createElement('li')
newli.innerHTML("Hello there")
list.insertBefore(newli, list.children[1])

//() parentElem.replaceChild(node, oldChild)

//() A word about “document.write”
//* The call to document.write only works while the page is loading. If we call it afterwards, the existing document content is erased.

