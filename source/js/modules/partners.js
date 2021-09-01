'use strict';

let cardsSwiper = Swiper;
let buttonsSwiper = Swiper;
let init = false;

function buttonsSwiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
  let desktop = window.matchMedia('(min-width: 1024px)');

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

/* On Load
**************************************************************/
window.addEventListener('load', function() {
  buttonsSwiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
  buttonsSwiperMode();
});
