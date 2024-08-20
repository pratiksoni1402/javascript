const image = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    image.src = response.message;
  });

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.send();
});
