// For example, the 7th Fibonacci number in a Fibonacci sequence is 13.
// The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13

const fibSeq = n => {
  if (n < 1) return [];
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  if (n === 3) return [1, 2, 3];
  const rest = fibSeq(n - 1);
  return [...rest, rest[n - 2] + rest[n - 3]];
};

module.exports = fibSeq;
