"use strict";
// Q1 temperature from celcius to farenheit
let celcius = 12;
let farenheit = celcius * 1.8 + 32;
console.log(farenheit);
// Q2 a program that calculates percentage
let totalMarks = 1100;
let obtainedMarks = 889;
let percentage = (obtainedMarks / totalMarks) * 100;
console.log(percentage);
// Q3 Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let originalPrice = 1000;
let discountonGreaterthan100 = originalPrice * 0.1;
let discountonlessthan100 = originalPrice * 0.5;
let newPricefor10percent = originalPrice - discountonGreaterthan100;
let newPricefor5percent = originalPrice - discountonlessthan100;
if (originalPrice > 100) {
    console.log(newPricefor10percent);
}
else {
    console.log(newPricefor5percent);
}
;
// Q4 Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
let age = 18;
if (age >= 0 && age <= 12) {
    console.log('you are a child');
}
else if (age >= 13 && age <= 19) {
    console.log("you are a teenager");
}
else {
    console.log("adult");
}
;
// Q5  Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
let temperature = 10;
if (temperature < 0) {
    console.log("its cold outside you should wear warm clothes its too cold");
}
else if (temperature > 0 && temperature <= 10) {
    console.log("you should wear warm clothes");
}
else {
    console.log("you can wear normal outfits the temperature is not too cold or hot outside");
}
// Q6 Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let num = 11;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("the number is divisible by both 3 and 5");
}
else if (num % 3 === 0 && num % 5 !== 0) {
    console.log("the number is only divisible by 3");
}
else if (num % 5 === 0 && num % 3 !== 0) {
    console.log("the number is only divisible by  5 only");
}
else {
    console.log("the number is not divisible by boht 3 and 5");
}
// Q7 - Write a program that checks if the given year is leap year or not.
let days = 366;
if (days == 366) {
    console.log("this is leap year");
}
else {
    console.log("this is not a leap year");
}
;
// Q8  Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
// Q9  Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax.
