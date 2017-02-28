window.addEventListener('keydown', function (e) {
  // test
  // console.log(e.keyCode);
  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll('.key');
  // test
  // console.log(audio);
  // console.log(key);

  if(!audio) return false;

  // currentTime 指示当前的播放的位置为 0 秒
  // 目的是为了在按下按键时重复地播放 0 秒位置的声音，这样就不需要等待当前音频播放完成
  audio.currentTime = 0;

  // 播放音频
  audio.play();

  // 添加 playing 过渡效果
  key.classList.add('playing');

  // 对每一个 key 移除过渡效果
  keys.forEach( key => {
    return key.addEventListener('transitionend', removeTransition);
  });

  // 移除过渡事件
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return false;

    this.classList.remove('playing');
  }


});


