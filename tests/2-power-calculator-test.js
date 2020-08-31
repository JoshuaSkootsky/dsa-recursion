const power = require('../src/2-power-calculator');

console.log(power(10, 2));
console.log(power(10, 2) === 100);
console.log(power(10, -2));
console.log(power(10, -2) === 'exponent should be >= 0');
