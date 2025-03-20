document.body.children[0]
document.body.children[0].innerHTML

//Inner text will give <i> Pratik</i> as result
// document.body.children[0].innerText = "<i> Pratik</i>"

//This will change the Test of the children at index position 0
// document.body.children[0].innerHTML = "<i> Pratik</i>"

//!textContent: Includes all text, regardless of whether it is visible or not.
//!innerText: Only includes text that is visible (considering CSS display styles).

//!textContent: Returns text exactly as it appears in the Document Object Model, ignoring CSS styles.
//!innerText: Reflects the rendered text, considering CSS styles, and normalizes whitespace.

//!textContent can be faster in performance as it directly interacts with the Document Object Model without considering CSS styles.
//!innerText may be slower due to its need to consider CSS and layout.

//*Use Cases
//!Use textContent when you need the raw text content of an element, including text from hidden elements.
//!Use innerText when you need the text content as it appears to the user, reflecting the actual rendering of the text on the webpage.

document.body.children[0].textContent = 'Pratik';
document.body.children[1].innerText = 'Hello World';

document.body.children[4].src = '	https://cdn.pixabay.com/photo/2017/08/10/00/40/stars-2616537_1280.jpg'