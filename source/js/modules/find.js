'use strict';

let buttonsSwiper = Swiper;
let cardsSwiper = Swiper;

let init = false;
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
let desktop = window.matchMedia('(min-width: 1024px)');
let flag = false;

function buttonsSwiperMode() {

  // Enable (for mobile)
  if(mobile.matches) {
    if (!init) {
      init = true;
      buttonsSwiper = new Swiper('.find-tags__buttons-list', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
      });
      cardsSwiper = new Swiper('.find-cards__cards-list', {
        slidesPerView: 'auto',
        spaceBetween: 8,
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



const partnersBtns = Array.from(document.querySelectorAll('.find-tags__button-item'));
partnersBtns.forEach(item => {
  item.addEventListener('click', function(e) {
    item.classList.contains('find-tags__button-item--active') ? item.classList.remove('find-tags__button-item--active') : item.classList.add('find-tags__button-item--active');
  })
});




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
});
