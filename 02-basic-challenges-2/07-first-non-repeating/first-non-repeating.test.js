const findFirstNonRepeatingCharacter = require("./first-non-repeating");

test("Find First Non-repeating Character", () => {
  expect(findFirstNonRepeatingCharacter("aabccdeff")).toBe("b");
  expect(findFirstNonRepeatingCharacter("aabbcc")).toBeNull();
  expect(findFirstNonRepeatingCharacter("hello word")).toBe("h");
});
