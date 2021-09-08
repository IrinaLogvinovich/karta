const promoSwiper = new Swiper('.promo__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: ".promo__next",
    prevEl: ".promo__prev",
  },
});

const card = document.querySelector('.promo__card');
let topCard = card.getBoundingClientRect().top;
let leftCard = card.getBoundingClientRect().left;
window.addEventListener('scroll', function() {
  if (window.pageYOffset > topCard) {
    card.style.position = 'fixed';
    card.style.left = leftCard + 'px';
    card.style.top = 0;
    card.style.margin = 0;
  } else {
    card.style = "";
  }
});

window.addEventListener('resize', function(){
  topCard = card.getBoundingClientRect().top;
  leftCard = card.getBoundingClientRect().left;
})
