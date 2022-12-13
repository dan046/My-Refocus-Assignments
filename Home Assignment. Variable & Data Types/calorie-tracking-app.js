/*
Task 1. Calorie tracking app
You are asked to design a calorie tracking app, which helps users to:
Keep a record of their activities.
Monitor the number of calories they lose when performing the activity.

Sam decides to do cycling 30 minutes everyday for 15 days. Cycling for 30 minutes
burns 225 calories on average. Use console.log to tell Sam how much calories he would lose:

Output:
“Great work, Sam! After 0.5 hours of cycling every day for a week, you may lose a total of 3375 calories.”
*/

let user = "Sam"
let avgCaloriesLost = 225 // Cycling for 30 minutes (0.5 hours) burns 225 calories on average.
let days = 15 // total number of days Sam has been cycling for 2 weeks

let totalCaloriesLostPerWeek = avgCaloriesLost * days
console.log(
  `Great work, ${user}! After 0.5 hours of cycling every day for a week, you may lose a total of ${totalCaloriesLostPerWeek} calories.`
)
