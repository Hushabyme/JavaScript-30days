const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

// 设置时间函数
function setTime() {
  // 获取当前时间
  const now = new Date();

  // 获取当前秒数
  // 计算角度
  const seconds = now.getSeconds(),
        secondDegrees = ((seconds / 60) * 360) + 90;
  // test
  console.log(seconds);
  console.log(secondDegrees);
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;


  // 获取当前分钟数
  // 计算角度
  const minutes = now.getMinutes(),
        minuteDegrees = ((minutes / 60) * 360) + 90;
  // test
  console.log(minutes);
  console.log(minuteDegrees);
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  // 获取当前小时数
  // 计算角度
  const hours = now.getHours(),
        hourDegrees = ((hours / 12) * 360) + 90;
  // test
  console.log(hours);
  console.log(hourDegrees);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setTime ,1000);