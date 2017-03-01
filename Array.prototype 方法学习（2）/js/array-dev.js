// 数据
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.some()
// 1. people 中至少有一个人满 19 岁了吗？
const atLeast = people.some(person => {
  const currentYear = new Date().getFullYear();
  // test
  // console.log(currentYear);

  return currentYear - person.year >= 19
});
console.log({atLeast});

// Array.prototype.every()
// 2. people 中每一个都满 19 岁了吗？
const every = people.every(person => {
  const currentYear = new Date().getFullYear();

  return currentYear - person.year >= 19
});
console.log({every});

// Array.prototype.find()
// 3. 寻找到 comments 中 id 为 2039842 的注释
const comment = comments.find(comment => comment.id === 2039842);
console.log(comment);

// Array.prototype.findIndex()
// 4. 寻找到 comments 中 id 为 823423 的注释并删除它
const index = comments.findIndex(comment => comment.id === 823423);
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.table(newComments);

