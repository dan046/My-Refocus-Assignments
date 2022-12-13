// A simple JS code that calculates the person's BMI or Body Mass Index.

// The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.
function bmiCalculator(name, weight, height) {
  const bmi = weight / Math.pow(height, 2)
  console.log(
    `All stats doesn't accurately says your health status. i.e. A muscular man can be called overweight.`
  )
  console.log(`Hi ${name}, your BMI is ${Math.round(bmi)}.`)
  if (bmi > 18.5) {
    console.log(`Weight Status: Healthy Weight.`)
  } else if (bmi > 24.9) {
    console.log(`Weight Status: Overweight.`)
  } else if (bmi > 30) {
    console.log(`Weight Status: Obese.`)
  } else console.log(`Weight Status: Underweight.`)
}

bmiCalculator(`Dan`, 67, 1.7)
