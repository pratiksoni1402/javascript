h1 = document.querySelector('h1')
function ChangetheColor() {
  document.getElementById('heading').style.backgroundColor = 'teal';
  console.log("Hiiiii")
}


h1.addEventListener('click', ChangetheColor)
h1.addEventListener('mouseover', function () {
  console.log('This is on hover')
})
