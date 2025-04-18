//() creating tag Insertion methods
let div = document.createElement('div')
div.className = 'alert'
div.innerHTML = '<strong>Inserted in DOM</strong> using JavaScript.'
// insertion in DOM
document.body.append(div)

let textNode = document.createTextNode('This is text node.')

ol.before('before')
ol.after('after')

let liFirst = document.createElement('li')
liFirst.innerHTML = 'prepend'
ol.prepend(liFirst)

let liLast = document.createElement('li')
liLast.innerHTML = 'append'
ol.append(liLast)

//() insertAdjacentHTML/Text/Element
div.insertAdjacentHTML('beforebegin', '<p>Hello</p>')
div.insertAdjacentHTML('afterend', '<p>Bye</p>');