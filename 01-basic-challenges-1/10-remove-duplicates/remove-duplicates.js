function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    !uniqueArr.includes(arr[i]) ? uniqueArr.push(arr[i]) : null;
  }

  return uniqueArr;
}
module.exports = removeDuplicates;
