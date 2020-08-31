// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

function splitter(string, state = { remainder: '', delimiter: '/', arr: [] }) {
  if (string.length === 0) {
    state.arr.push(state.remainder);
    return state.arr;
  }
  const next = string[0];
  const rest = string.slice(1);
  if (next === state.delimiter) {
    state.arr.push(state.remainder);
    state.remainder = '';
  } else {
    state.remainder += next;
  }
  return splitter(rest, state);
}

module.exports = splitter;
