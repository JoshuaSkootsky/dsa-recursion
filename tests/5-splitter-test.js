const splitter = require('../src/5-splitter');
const v8 = require('v8');

const deepCopy = o => {
  return v8.deserialize(v8.serialize(o));
};

console.log(
  splitter('02/20/2020'),
  splitter('02/20/2020').join() === ['02', '20', '2020'].join()
);

const state = { remainder: '', delimiter: '*', arr: [] };

let s1, s2;

s1 = deepCopy(state);
s2 = deepCopy(state);

console.log(
  splitter('02*20*2020', s1),
  splitter('02*20*2020', s2).join() === ['02', '20', '2020'].join()
);

s1 = deepCopy(state);
s2 = deepCopy(state);

console.log(
  splitter('02***20***2020', s1),
  splitter('02***20***2020', s2).join() ===
    ['02', '', '', '20', '', '', '2020'].join()
);
