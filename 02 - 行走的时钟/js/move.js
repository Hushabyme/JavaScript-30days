(function () {
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setTime() {
    const now = new Date();

    const seconds = now.getSeconds(),
      secondDegrees = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes(),
      minuteDegrees = ((minutes / 60) * 360) + 90;

    const hours = now.getHours(),
      hourDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setTime ,1000);
}());

