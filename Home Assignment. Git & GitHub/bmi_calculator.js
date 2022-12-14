// A simple JS code that calculates the person's BMI or Body Mass Index.

// First, ask the user for their height in meters and their weight in kilograms.
// Then, calculate the BMI using the formula: BMI = weight (kg) / height^2 (m^2).
// Next, interpret the BMI value according to the following categories:
// Under 18.5: Underweight
// 18.5-24.9: Normal weight
// 25.0-29.9: Overweight
// 30.0 or higher: Obese

function bmiCalculator(name, weight, height) {
  const bmi = weight / Math.pow(height, 2)
  console.log(
    `DISCLAIMER: Caution should be observed when using the BMI as a measure for interpreting overweight and obesity as body composition can be highly variable yet have the same BMI. Therefore, BMI is not a reliable measurement of body composition in individuals particularly in older and younger people.`
  )
  console.log(`Hi ${name}!`)

  if (bmi < 18.5) {
    console.log(
      `Your BMI is ${Math.round(bmi)}, which means you are underweight.`
    )
  } else if (bmi >= 18.5 && bmi < 24.9) {
    console.log(
      `Your BMI is ${Math.round(bmi)}, which means you are normal weight.`
    )
  } else if (bmi >= 24.9 && bmi < 30) {
    console.log(
      `Your BMI is ${Math.round(bmi)}, which means you are overweight.`
    )
  } else
    console.log(`Your BMI is ${Math.round(bmi)}, which means you are obese.`)
}

//Manual Testing
bmiCalculator(`Subject1`, 45, 1.7) // If value is less than 18.5. Underweight.
bmiCalculator(`Subject2`, 55, 1.7) // If value is greater than or equal to 18.5 and less than 24.9. Normal Weight.
bmiCalculator(`Subject3`, 75, 1.7) // If value is greater than or equal to 24.9 and less than 30. Overweight.
bmiCalculator(`Subject4`, 90, 1.7) // If Value is greater than 30. Obese.
