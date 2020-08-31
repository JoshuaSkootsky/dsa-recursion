// Take a string as input, reverse the string, and return the new string.
// what to do if a string has a single middle thing?
function reverse(string) {
  const len = string.length;
  // what to do if a string has a single middle thing?
  if (len < 2) return string;

  const end = string[string.length - 1];
  const start = string[0];
  const middle = reverse(string.slice(1, -1));

  return end + middle + start;
}

module.exports = reverse;
