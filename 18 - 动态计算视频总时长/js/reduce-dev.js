const timeNodes = document.querySelectorAll('[data-time]');
// console.log(timeList);

// 将其转换成真正的数组
const realTimeNodes = [...timeNodes];

// 计算视频的总秒数
const seconds = realTimeNodes
                          // 获取所有的 data-time 的时间，比如 5:05
                          .map(node => node.dataset.time)
                          .map(time => {
                            // 将 ":" 符号去掉，转换成 [5, 05] 的数组形式
                            // 但是 05 并不是我们需要的数字，所以使用 Number.parseFloat 方法去掉前面的 0
                            const [min, sec] = time.split(':').map(Number.parseFloat);

                            // 将分钟 * 60，就可以转化成对应的秒
                            // 比如 5 * 60 + 5 = 305 秒
                            return min * 60 + sec;
                          })
                          // 将所有的秒数相加得到总秒数
                          .reduce((total, seconds) => total + seconds, 0);

// 使其更具备语义化，表示剩余秒数
let secondsLeft = seconds;
// console.log(seconds);

// 小时的转化就是 秒数 / 3600，但是由于有小数，所以使用 Math.floor
const hours = Math.floor(secondsLeft / (60 * 60));
// console.log(hours);

// 这里表示 17938 / 3600 以后是 4 个多小时
// 也就是说 17938 % 3600 以后剩余 3538 秒
secondsLeft = secondsLeft % 3600;
// console.log(secondsLeft);

const minutes = Math.floor(secondsLeft / 60);
// console.log(minutes);

// 3538 秒又 % 60 以后就是剩余的秒数了
secondsLeft = secondsLeft % 60;
// console.log(secondsLeft);
console.log(`视频总长度为 ${hours} 小时 ${minutes} 分钟 ${secondsLeft} 秒。`);


