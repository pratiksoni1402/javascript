// console.log(elem.outerHTML)

//() nodeValue/data: text node content

let text = document.body.firstChild
console.log(text.data)

let comment = text.nextSibling
console.log(comment.data)

// () textContent: pure text
// ? The textContent provides access to the text inside the element: only text, minus all <tags>.
console.log(news.textContent)

for(let li in document.querySelector('li')){
  let title = li.firstChild.data;
  console.log(title)
}
//() The “hidden” property