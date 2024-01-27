function calculator(a, b, operator) {
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        throw new Error("Division by zero");
      }
      return a / b;
    default:
      throw new Error("Invalid operator");
  }

  return result;
}
module.exports = calculator;
