var galleryThumbs = new Swiper('.article__gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var galleryText = new Swiper('.article__gallery-text', {
  slidesPerView: 1,
  noSwiping: true,
  allowTouchMove: false,
});

var galleryTop = new Swiper('.article__gallery-top', {
  freeMode: true,
  breakpoints: {
    // when window width is >= 1024
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs,
      }
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

galleryTop.on('slideChange', function () {
  galleryText.slideTo(galleryTop.activeIndex);
});
