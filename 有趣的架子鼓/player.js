(function () {
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return false;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach( key => {
    return key.addEventListener('transitionend', removeTransition);
  });

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return false;

    this.classList.remove('playing');
  }

  window.addEventListener('keydown', playSound);
}());



  

  





