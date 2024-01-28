function countVowels(str) {
  const formattedStr = str.toLowerCase();

  let count = 0;
  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr[i];
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
      ? count++
      : null;
  }

  return count;
}

module.exports = countVowels;
