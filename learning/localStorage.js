const nameElement = document.querySelector('.name-tag');
const nameinput = document.querySelector('.input-box');

nameElement.innerText = localStorage.myName

nameinput.addEventListener('input', (e) => {
  localStorage.myName = e.target.value;
  nameElement.innerText = localStorage.getItem('myName')
});
