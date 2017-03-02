(function () {
  // All DOM element.
  const player = document.querySelector('.player');
  const video = player.querySelector('.viewer');
  const next = player.querySelector('.next');
  const progress = player.querySelector('.progress');
  const progressBar = player.querySelector('.progress__filled');
  const toggle = player.querySelector('.toggle');
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll('.player__slider');

  // Test whether exist.
  console.log(player);
  console.log(video);
  console.log(next);
  console.log(progress);
  console.log(progressBar);
  console.log(toggle);
  console.log(skipButtons);
  console.log(ranges);

  // Play or pause the video.
  function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  // Update the player button status.
  function updateButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
  }

  // Skip the segments of the video.
  function skip() {
    const skip = this.dataset.skip;
    video.currentTime += parseFloat(skip);
  }

  // Control the range attribute of the input.
  function handleRange() {
    // Let the name attribute equal the value.
    video[this.name] = this.value;

    this.title = this.value;

    // Change the volume digits to 1~100.
    if(this.name === 'volume') {
      const volume = this.value * 100;
      this.title = Number.parseInt(volume);
    }
  }

  // Handle the progress bar present with video's play.
  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  // Drag the bar in your favorite place.
  function controlBar(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
  }

  // Next
  function handleNext() {
    let count = 1;
    video.src = `video/2.mp4`;
    console.log(count);
  }

  // Event listen
  video.addEventListener('click', togglePlay);
  toggle.addEventListener('click', togglePlay);

  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);

  video.addEventListener('timeupdate', handleProgress);
  progress.addEventListener('mousedown', controlBar);

  next.addEventListener('click', handleNext);

  skipButtons.forEach(button => button.addEventListener('click', skip));
  ranges.forEach(range => range.addEventListener('change', handleRange));
}(window));
