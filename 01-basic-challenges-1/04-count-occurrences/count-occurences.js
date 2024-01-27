const countOccurrences = (word, character) => {
  return word.split(character).length - 1;
};

module.exports = countOccurrences;
