(function () {
  const panels = document.querySelectorAll('.panel');

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

  function toggleOpen() {
    this.classList.toggle('open');
  }

  function toggleActive(e) {
    // 因为浏览器的差异，有的浏览器显示 flex，有的浏览器显示 flex-grow，因此使用 includes()
    if(e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }
}());
