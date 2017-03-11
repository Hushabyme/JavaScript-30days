// 原始数据
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// 排序

// 利用正则表达式替换以 a|an|the 开头的字符串
function strip(str) {
  return str.replace(/^(a|an|the|)/i, '');
}

// 将数据进行排序
const isSort = bands.sort((a, b) => {
  return strip(a) > strip(b) ? 1 : -1;
});

const bandList = document.querySelector('#bands');

// 渲染到页面中
bandList.innerHTML = isSort
                           .map(band => `<li>${band}</li>`)
                           .join('');