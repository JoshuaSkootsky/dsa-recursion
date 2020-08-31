// count the n-th triangular number

function triangle(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return n + triangle(n - 1);
}

module.exports = triangle;
