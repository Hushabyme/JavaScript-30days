// 本节的中心思想是：
// 1. 获取所有的 checkbox
// 2. 添加事件监听
// 3. 当 shift 和 当前的 checkbox 被选中后循环所有的 checkbox
// 4. 当第一个和最后一个 checkbox 被选中后
// 5. inBetween 则为 true，接着它们的 checked 属性变为 true

const checkboxes = document.querySelectorAll('#box input[type="checkbox"]');
let lastChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));

function handleClick(e) {

  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}