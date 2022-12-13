/*
Task 1. Temperature converter
You are asked to implement a feature for a weather app. This feature takes the
temperature in Manila from the servers of PAGASA and converts it from one scale
to another.
Implement 2 functions:
convertToKelvin(tempCelsius) that converts Celsius to Kelvin
convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin
*/
function convertToKelvin(tempCelsius) {
  console.log("Celsius to Kelvin Converter")
  let tempKelvin = tempCelsius + 273.15 + " K"
  return tempKelvin
}
console.log(convertToKelvin(100))

// Student Note: Unable to implement 2 functions with the same name. In order to achieve the desired output, changed the name instead.

function fahrenheitToKelvin(tempFahrenheit) {
  console.log("Fahrenheit to Kelvin Converter")
  let tempKelvin = ((tempFahrenheit - 32) * 5) / 9 + 273.15 + " K"
  return tempKelvin
}

console.log(fahrenheitToKelvin(100))
