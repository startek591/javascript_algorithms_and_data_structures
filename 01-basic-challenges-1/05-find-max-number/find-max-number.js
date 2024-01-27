function findMaxNumber(num) {
  let max = num[0];
  num.forEach((el) => (max = el > max ? el : max));
  return max;
}

findMaxNumber([5, 10, 9, 3, 2]);

module.exports = findMaxNumber;
