var popupSpans = Array.from(document.querySelectorAll('.article__special'));
var popups = Array.from(document.querySelectorAll('.article__popup'));
var popupBtns = Array.from(document.querySelectorAll('.article__popup-close'));
popupBtns.forEach((item) => {
  item.addEventListener('click', function(e) {
    const popup = e.target.closest('.article__popup');
    popup.classList.remove('article__popup--open');
    const dataPopup = popup.dataset.popup;
    const searchedSpan = popupSpans.filter(item => {
      return item.dataset.popup === dataPopup;
    })[0];
    searchedSpan.classList.remove('article__special--active');
  });
});

popupSpans.forEach((item) => {
  item.addEventListener('click', function() {
    const dataPopup = item.dataset.popup;
    const searchedPopup = popups.filter(popup => {
      return popup.dataset.popup === dataPopup;
    })[0];
    if (item.classList.contains('article__special--active')) {
      item.classList.remove('article__special--active');
      searchedPopup.classList.remove('article__popup--open');
    } else  {
      item.classList.add('article__special--active');
      searchedPopup.classList.add('article__popup--open');
    }

  });
});
