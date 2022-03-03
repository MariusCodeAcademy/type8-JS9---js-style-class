console.log('style.js online');

const h1El = document.querySelector('h1');

console.log('h1El ===', h1El);

const textEl = document.querySelector('.text');
textEl.style.color = 'tomato';

//  <div class="card">
// uzdedam borderi, ir padinga is visu pusiu 20px ir inlineblock

// <h2 class="title">Card title</h2>
// pakeiciam fonto storis normal,
// font size 35px
// border bottom 2px solid black

{
  /* <ul class='my-list'>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>; */
}
const ulEl = document.querySelector('.my-list');
// pirmas el
console.log('ulEl ===', ulEl.children[0]);

// gaunam masyva kuriame yra visi musu li el
const liElArrayLike = document.querySelectorAll('.my-list li');
console.log('liElArrayLike ===', liElArrayLike);
liElArrayLike[1].style.color = 'blue';

// pakeisti dvigubai padidinti pirmo el fonto dydi
liElArrayLike[0].style.fontSize = '2rem';
// console.log('dabartinisDydis ===', dabartinisDydis);
// praplesti tarpus tarp raidziu antram el iki 5px
// treciam el uzdeti juoda fona ir balta fonto spalva

// nustatyti fonta iki 100px paspaudus mygtuka
const btnEl = document.getElementById('didinti');
const btnElMazinti = document.getElementById('mazinti');

btnEl.addEventListener('click', () => {
  h1El.style.fontSize = '100px';
});

btnElMazinti.addEventListener('click', () => {
  const dabartinisDydis = h1El.style.fontSize;
  console.log('dabartinisDydis ===', dabartinisDydis);
  // '100px' - pasalinti px
  const dabarinioDydzioSkReikme = dabartinisDydis.replace('px', '');
  const naujaPamazintaSkReiksme = dabarinioDydzioSkReikme - 10;
  h1El.style.fontSize = naujaPamazintaSkReiksme + 'px';
});

// const inputValue = '#333';
// document.body.style.backgroundColor = inputValue;
