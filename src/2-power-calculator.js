// Use only exponents greater than or equal to 0 (positive numbers)
const powerCalculator = (base, exp) => {
  if (exp < 0) return 'exponent should be >= 0';
  if (exp === 0) return 1;
  return base * powerCalculator(base, exp - 1);
};

module.exports = powerCalculator;
