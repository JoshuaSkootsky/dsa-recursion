const turnAroundOoo = require('../src/3-reverse');

console.log(turnAroundOoo('reverse this string, please'));
console.log(turnAroundOoo('reverse this string, please!'));
console.log(turnAroundOoo('reverse this string, please!!'));
console.log(turnAroundOoo('reverse this string, please!!!'));
console.log(
  turnAroundOoo('hello world!'),
  turnAroundOoo('hello world!') === '!dlrow olleh'
);
