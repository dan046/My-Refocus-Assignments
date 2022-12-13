/*
Task 1:
You are asked to develop a JavaScript app compatible with smartwatches. You use the sensor data of its pulse oximeter to tell a user that their oxygen level is normal or alarming. Write a function that alerts a user of their oxygen saturation. For data reference, chart levels can be found at the .pdf file.

Task 2:
Continue with the last task, and provide more observations based on the pulse rate.
*/

function oxygenSaturation(saturationLevels) {
  if (saturationLevels > 95) {
    console.log(
      `Oxygen Saturation levels (SpO2)%: ${saturationLevels}%. Normal reading.`
    )
  } else if (saturationLevels === 95) {
    console.log(
      `Oxygen Saturation levels (SpO2)%: ${saturationLevels}%. Acceptable to continue home monitoring.`
    )
  } else if (saturationLevels >= 92 && saturationLevels < 95) {
    console.log(
      `Oxygen Saturation levels (SpO2)%: ${saturationLevels}%. Seek advice from health professionals.`
    )
  } else {
    console.log(
      `Oxygen Saturation levels (SpO2)%: ${saturationLevels}%, which is below normal levels. Please seek urgent medical advice.`
    )
  }
}

function pulseRate(bpm) {
  if (bpm >= 40 && bpm <= 100) {
    console.log(`Pulse rate: ${bpm} bpm. Normal reading.`)
  } else if (bpm >= 101 && bpm <= 109) {
    console.log(
      `Pulse rate: ${bpm} bpm. Acceptable to continue home monitoring.`
    )
  } else if (bpm >= 110 && bpm <= 130) {
    console.log(
      `Pulse rate: ${bpm} bpm. Seek advice from health professionals.`
    )
  } else {
    console.log(`Pulse rate: ${bpm} bpm. Please seek urgent medical advice.`)
  }
}

for (let x = 90; x <= 131; x++) {
  oxygenSaturation(x)
  pulseRate(x)
}
