const wordsArray = ['слово-1', 'слово-2', 'слово-3', 'слово-4'];
const wordElement = document.querySelector('.promo__title span');

let index = 0;

setInterval(function() {
  if (index >= wordsArray.length) {
    index = 0;
  }
  wordElement.textContent = wordsArray[index];
  index++;
}, 2000);
