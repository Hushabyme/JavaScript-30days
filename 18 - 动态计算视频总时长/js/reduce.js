(function(){
  const timeNodes = document.querySelectorAll('[data-time]');

  const realTimeNodes = [...timeNodes];


  const seconds = realTimeNodes
    .map(node => node.dataset.time)
    .map(time => {
      const [min, sec] = time.split(':').map(Number.parseFloat);

      return min * 60 + sec;
    })
    .reduce((total, seconds) => total + seconds, 0);


  let secondsLeft = seconds;

  const hours = Math.floor(secondsLeft / (60 * 60));
  secondsLeft = secondsLeft % 3600;

  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(`所有视频总长度为 ${hours} 小时 ${minutes} 分钟 ${secondsLeft} 秒。`);
}());


