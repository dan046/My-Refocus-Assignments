const bmiCalculator = require("./bmi-calculator-auto")

test("If value is less than 18.5. Underweight.", () => {
  const resultString = bmiCalculator("Subject", 45, 1.7)
  const resultNumber = parseFloat(resultString.split(" ")[3])
  expect(resultNumber).toBeLessThan(18.5)
})

test("If value is greater than or equal to 18.5 and less than 24.9. Normal Weight.", () => {
  const resultString = bmiCalculator("Subject", 55, 1.7)
  const resultNumber = parseFloat(resultString.split(" ")[3])
  expect(resultNumber).toBeGreaterThanOrEqual(18.5)
  expect(resultNumber).toBeLessThan(24.9)
})

test("If value is greater than or equal to 24.9 and less than 30. Overweight.", () => {
  const resultString = bmiCalculator("Subject", 85, 1.7)
  const resultNumber = parseFloat(resultString.split(" ")[3])
  expect(resultNumber).toBeGreaterThanOrEqual(24.9)
  expect(resultNumber).toBeLessThan(30)
})

test("If value is greater than 30. Obese.", () => {
  const resultString = bmiCalculator("Subject", 105, 1.7)
  const resultNumber = parseFloat(resultString.split(" ")[3])
  expect(resultNumber).toBeGreaterThan(30)
})

test("If typeof height and weight is not a number.", () => {
  const resultString = bmiCalculator("Subject", "105", 1.7)
  expect(resultString).toBe("Error: must be a number.")
})

test("If name is not an alphabet", () => {
  const resultString = bmiCalculator("123", 50, 1.7)
  expect(resultString).toBe("Error: name must be an alphabet.")
})
