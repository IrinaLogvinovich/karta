'use strict';

let cardsSwiper = Swiper;
let buttonsSwiper = Swiper;
let init = false;
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
let desktop = window.matchMedia('(min-width: 1024px)');
let flag = false;

function buttonsSwiperMode() {

  // Enable (for mobile)
  if(mobile.matches) {
    if (!init) {
      init = true;
      buttonsSwiper = new Swiper('.partners__buttons-list', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
      });

      cardsSwiper = new Swiper('.partners__cards-list', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
      });

    }
  }

    // Disable (for desktop)
    else if (desktop.matches) {
      buttonsSwiper.destroy(true, false);
      cardsSwiper.destroy(true, false);

    init = false;
    }
}

function cardsDisplay(flg = false) {
  if (mobile.matches) {
    flag = true;
    cards.forEach(item =>
        item.classList.remove('partners__hide'));

  }
  if (desktop.matches && (flag || flg)) {
    flag = false;
    cards.forEach((item, index) => {
      if (index >= 4) {
        item.classList.add('partners__hide');
      }
    });
  }
}

const listBtn = document.querySelector('.partners__places-control--list');
const mapBtn = document.querySelector('.partners__places-control--map');
const cardsList = document.querySelector('.partners__cards-list');
const loadMore = document.querySelector('.partners__load-more');
const map = document.querySelector('.partners__map');
const cards = Array.from(document.querySelectorAll('.partners__card'));


listBtn.addEventListener('click', function(e) {
  if (mapBtn.classList.contains('partners__places-control--active')) {
    mapBtn.classList.remove('partners__places-control--active');
    listBtn.classList.add('partners__places-control--active');
    cardsList.classList.remove('partners__hide');
    loadMore.classList.remove('partners__hide');
    map.classList.add('partners__hide');
  }
});

mapBtn.addEventListener('click', function(e) {
  if (listBtn.classList.contains('partners__places-control--active')) {
    listBtn.classList.remove('partners__places-control--active');
    mapBtn.classList.add('partners__places-control--active');
    cardsList.classList.add('partners__hide');
    if (!loadMore.classList.contains('partners__hide')) {
      loadMore.classList.add('partners__hide');
    }
    map.classList.remove('partners__hide');
  }
});

const partnersBtns = Array.from(document.querySelectorAll('.partners__button-item'));
partnersBtns.forEach(item => {
  item.addEventListener('click', function(e) {
    partnersBtns.forEach(btn => btn.classList.remove('partners__button-item--active'));
    item.classList.add('partners__button-item--active');
  })
});

loadMore.addEventListener('click', function(e) {
    let count = 0;
    cards.forEach(item => {
      if (item.classList.contains('partners__hide') && count < 8) {
        item.classList.remove('partners__hide');
        count++;
      }
    });
  const hiddenQuantity = Array.from(document.querySelectorAll('.partners__card.partners__hide')).length;

  if (hiddenQuantity === 0) {
    loadMore.classList.add('partners__hide');
  }

})

cardsDisplay(true);



/* On Load
**************************************************************/
window.addEventListener('load', function() {
  buttonsSwiperMode();
  flag = mobile.matches;
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
  buttonsSwiperMode();
  cardsDisplay();

});
