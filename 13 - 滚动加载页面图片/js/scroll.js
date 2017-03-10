(function () {
  function debounce(fn, wait = 20, immediate = true) {
    let timeout;

    return function (...args) {
      let ctx = this;
      const later = function () {
        timeout = null;

        if(!immediate) {
          fn.apply(ctx, args);
        }
      };

      const callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);
      if(!callNow) {
        fn.apply(ctx, args);
      }
    }
  }

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide() {
    sliderImages.forEach(sliderImage => {
      const slideInMiddle = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShow = slideInMiddle > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      isHalfShow && isNotScrolledPast
        ? sliderImage.classList.add('active')
        : sliderImage.classList.remove('active');
    });
  }

  window.addEventListener('scroll',debounce(checkSlide));
}());
