const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  // console.log(width, height);

  let {offsetX: x, offsetY: y} = e;
  // console.log(x, y);

  const walk = 100;

  // this 指的是当前的监听事件的对象，就是 hero
  // 如果鼠标移入 text 中，那么 e.target 就变成了 text，而不再是 hero 了
  // console.log(this, e.target);
  if(this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 pink`;
}


hero.addEventListener('mousemove', shadow);