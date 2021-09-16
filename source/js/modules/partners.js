'use strict';

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
      buttonsSwiper = new Swiper('.categories__buttons-list', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
      });
    }
  }

    // Disable (for desktop)
    else if (desktop.matches) {
      buttonsSwiper.destroy(true, false);

    init = false;
    }
}



const partnersBtns = Array.from(document.querySelectorAll('.categories__button-item'));
partnersBtns.forEach(item => {
  item.addEventListener('click', function(e) {
    item.classList.contains('categories__button-item--active') ? item.classList.remove('categories__button-item--active') : item.classList.add('categories__button-item--active');
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
