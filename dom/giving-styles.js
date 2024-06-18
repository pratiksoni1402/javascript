  const allLinks = document.querySelectorAll('a')
console.log("All links", allLinks)
//! Change color one by one
allLinks[0].style.color = 'teal'

//! By Using For Loop
// for(let i = 0; i < allLinks.length; i++){
//   allLinks[i].style.color = 'teal'
// }

//! By Using for of Loop
for (let link of allLinks) {
  // link.style.color = 'teal'
  // link.style.textDecoration = 'none'
  // link.style.fontWeight = 900
  // link.style.fontSize = '32px'
  //! Instead of writing style one by one you can use the shortHand below
  link.style.cssText = `color: teal;
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;`

  //! This will set the new class attribute with value of greenLink
  link.setAttribute('class', 'greenlink')

  //! By this way you can add multiple class names
  link.classList.add('trail', 'aaaa')

  //! By this way you can remove single or multiple class names
  link.classList.remove('aaaa')

  //! If the class exist then it will be removed and if not exist then it will be added
  link.classList.toggle('aaaa')

  //
  link
}