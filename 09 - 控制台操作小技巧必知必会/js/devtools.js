// 以下代码仅为测试
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// 1. 一般的控制台写法
console.log('Hi');

// 2. 自定义字符串
console.log('Some %s', 'apples');

// 3. 自定义样式
console.log('%cWow,see this color', 'color: orange');
console.log('%cLook! I\'m big!', 'font-size: 22px');

// 4. 控制台警告(warning)
console.warn('Something\'s wrong?!');

// 5. 错误提示(error)
console.error('Error! Error! Error!');

// 6. 信息提示(info)
console.info('Check this message!');

// 7. 测试(assert)
console.assert(1 === 2, '1=2? Are you crazy?!');

// 8. 清空控制台(clear)
// console.clear();

// 9. 展示 DOM 元素
const p = document.querySelector('p');
console.dir(p);

// 10. 分组(group)
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.groupEnd(`${dog.name}`);
});

// 11. 计算(count)
console.count(makeGreen); // 表示出现了一次
makeGreen();
console.count(makeGreen); // 表示出现了两次

// 12. 时间(time)
console.time();

// 13. 表格(table)
console.table(dogs);
