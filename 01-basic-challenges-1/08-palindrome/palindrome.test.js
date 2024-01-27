const isPalindrome = require("./palindrome");

test("Checking for palindrome strings", () => {
  expect(isPalindrome("racecar")).toBe(true);
});
