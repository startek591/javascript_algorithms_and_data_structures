const helloWorld = require("./hello-world");

test("Returning 'Hello, World!; as a string", () => {
  const result = helloWorld();
  expect(result).toEqual("Hello World!");
});
