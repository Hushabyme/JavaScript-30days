// 发明家
const inventors = [
  { firstName: 'Albert', lastName: 'Einstein', year: 1879, passed: 1955 },
  { firstName: 'Isaac', lastName: 'Newton', year: 1643, passed: 1727 },
  { firstName: 'Galileo', lastName: 'Galilei', year: 1564, passed: 1642 },
  { firstName: 'Marie', lastName: 'Curie', year: 1867, passed: 1934 },
  { firstName: 'Johannes', lastName: 'Kepler', year: 1571, passed: 1630 },
  { firstName: 'Nicolaus', lastName: 'Copernicus', year: 1473, passed: 1543 },
  { firstName: 'Max', lastName: 'Planck', year: 1858, passed: 1947 },
  { firstName: 'Katherine', lastName: 'Blodgett', year: 1898, passed: 1979 },
  { firstName: 'Ada', lastName: 'Lovelace', year: 1815, passed: 1852 },
  { firstName: 'Sarah E.', lastName: 'Goode', year: 1855, passed: 1905 },
  { firstName: 'Lise', lastName: 'Meitner', year: 1878, passed: 1968 },
  { firstName: 'Hanna', lastName: 'Hammarström', year: 1829, passed: 1909 }
];


// Array.prototype.filter() 方法的使用
// 1. 在发明家的数组中筛选出在 1500's 后出生的发明家
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log('1.filter()的使用');
console.table(fifteen);
console.log('');

// Array.prototype.map()
// 2. 使用一个数组来展示发明家的 firstName 和 lastName
const name = inventors.map(inventor => `${inventor.firstName} ${inventor.lastName}`);
console.log('2.map()的使用');
console.log(name);
console.log('');

// Array.prototype.sort()
// 3. 请按照发明家的出生年龄进行排序，年龄越小的排名越靠前
const order = inventors.sort((a, b) => a.year > b.year
                                                      ? 1
                                                      : -1
);
console.log('3.sort()的使用');
console.table(order);
console.log('');

// Array.prototype.reduce()
// 4. 计算出所有发明家一共活了多久
const liveYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log('4.reduce()的使用');
console.log(`这些发明家一共活了 ${liveYears} 年`);
console.log('');

// 5. 根据发明家活的时间长短进行排序，由短到长
const liveOrder = inventors.sort((a, b) => {
  const prev = a.passed - a.year,
        next = b.passed - b.year;

  return prev - next > 0
                        ? 1
                        : -1
});
console.log('5.sort()的进一步使用');
console.table(liveOrder);
console.log('');

// 6. 计算下列数组中各字符串出现的次数
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const times = data.reduce((obj, item) => {
  if(!obj[item]) obj[item] = 0;

  obj[item]++;
  // test
  // console.log(obj);
  // console.log(item);

  return obj;
}, {});
console.log('6.reduce() 终极挑战');
console.log(times);