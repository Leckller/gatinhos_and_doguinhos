import './style.css'

const botoes = document.querySelectorAll('button');
const imgHTML = document.querySelector('#petImg');

botoes[0].addEventListener('click', (e) => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((res) => {
      imgHTML.src = res[0].url;
      console.log('new cat!')
    })
});