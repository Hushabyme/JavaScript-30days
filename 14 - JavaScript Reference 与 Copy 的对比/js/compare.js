// 从 string、number 和 boolean 开始

let age = 100;
let age2 = age;
// 理所应当的输出以下的值
console.log(age, age2); // 100, 100
// 如果在定义一个全局的呢？
age = 200;
// 为什么这里是 200？因为 这里的 age 是全局的，而 age2 是用 let 定义的，它的作用域并不在 window 上。
// 如果尝试使用 var，那么情况就不一样了，则会输出 200, 200
console.log(age, age2);  // 200, 100

// 同样的，如果是 String 类型，那么也是一样的道理
// let name = 'Alice';
// let name2 = name;
// console.log(name, name2);
// name = 'Bob';
// console.log(name, name2);

// 接下来我们来看看 Array 吧
let name = ['Alice', 'Bob', 'Cherry', 'David'];

// let name2 = name;
// name2[0] = 'Adam';
// 此时它会改变源数组，也就是说 name 中的 name[0] 也会被改变

// 而如果我们使用 slice() 方法进行浅拷贝的话，则会将源数组的内容拷贝一份，这样就不会改变原数组的数值了
let name3  = name.slice();

// 如果在 ES6 中，我们可以使用展开操作符，也是一样的
let name4 = [...name];

// 当然，如果你喜欢，还可以使用 Array.from() 也行
let name5 = Array.from(name);

// 如果你要问我 Array.from() 是做什么的？那么，你应该自己动手去查一查

// 另外，你会问，展开操作符不光可以用在数组中，对象中也是可以的吗？
let obj = {
  a: 1,
  b: 2
};

// 试试吧
// let obj2 = {...obj};

// 显然是不可以的，为什么？简而言之就是展开操作符 只能用在可枚举的对象中！不懂？那就去查查

// 既然，数组有 slice() 方法，那么对象也会有它自己的方法，就是 assign()
let obj3 = Object.assign({}, obj);

// 但是这里有一个问题，我们给 obj 在加上一层对象，这里我们建立一个新的对象吧
let obj4 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    f: 4
  }
};

let obj5 = Object.assign({}, obj4);

obj5.c.d = 5;
console.log(obj4);

// Oh,Nooooo~~~ 你会发现，源对象 obj4 中的 d 变成了 5，这就出现了问题
// 因此，这就是为什么我们要使用函数来进行 深拷贝对象的原因了

// 好了，到此结束啦，你有没有学习到新的东西呢？
