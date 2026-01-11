/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num <= 1) return false;

  let sum = 1;
  let sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i;

      // Avoid cases where the divisor is the squre like 6^2 = 36
      if (i * i !== num) {
        sum += num / i;
      }
    }
  }

  return sum === num;
};
