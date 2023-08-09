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

botoes[1].addEventListener('click', (e) => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
      imgHTML.src = res.message;
      console.log('new dog!')
    })
});

botoes[2].addEventListener('click', (e) => {
  const acoes = []

  Promise.race(acoes)
});