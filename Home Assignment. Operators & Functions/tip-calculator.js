/*
Task 2. Tip calculator
You are asked to design an app that enables you to leave a tip. The tip should be 10% of a meal cost. Write a code that shows the total tip to be paid based on the food price.
*/
function computeTip(totalBill) {
  console.log("Tip Calculator")
  let tipPercentage = 0.1 //10% of a meal cost
  let totalTip =
    "10% tip of a meal cost" + ": " + "₱" + totalBill * tipPercentage
  return totalTip
}

console.log(computeTip(1229.95))
