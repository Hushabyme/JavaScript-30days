const inputs = document.querySelectorAll('.controls input');
// test
console.log(inputs);

// 对每一个 input 框进行事件监听
inputs.forEach(input => input.addEventListener('change', test));

function test() {
  // this 指向的是每一个对应的 input

  // 返回当前的 input 的值
  console.log(this.value);

  // dataset 是 自定义的 data-* 的 DOMStringMap 集合，它会返回去掉 data- 后的字符串
  console.log(this.dataset);

  // suffix 的意思是"后缀"，prefix 的意思是"前缀"
  // 获取 dataset 中键为 size 的值（其实就是 dataset[size] = 'px'）
  const suffix = this.dataset.size || '';

  // test
  console.log(suffix);

  // 在 body 标签上使用 setProperty 方法定义样式
  document.body.style.setProperty(`--${this.name}`, this.value + suffix);
}

