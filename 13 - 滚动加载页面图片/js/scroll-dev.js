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
/*
*
*  总体思路是：判断图片的 1/2 处到图片底部这一段距离是否在页面中
*  如果在，则显示图片
*  否则，隐藏图片
*
* */
function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // 获取图片的 1/2 到顶部的距离
    const slideInMiddle = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    // 获取图片的底部到顶部的距离
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // 判断图片中心是否进入视野中
    const isHalfShow = slideInMiddle > sliderImage.offsetTop;
    // 判断滚动是否到图片的底部
    const isNotScrolledPast = window.scrollY < imageBottom;

    isHalfShow && isNotScrolledPast ? sliderImage.classList.add('active') : sliderImage.classList.remove('active');
  });
}

window.addEventListener('scroll',debounce(checkSlide));