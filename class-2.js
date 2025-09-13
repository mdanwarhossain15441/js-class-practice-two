// task 1

/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var myBurger = 750;

if(myBurger >= 500){
    console.log("you are got a free coke");
}else{
    console.log("cock price 30tk only");
}

// task 2

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

var weight = 120;
var height = 1.575;

var BMI = weight / (height * height);

if (BMI<18.5){
    console.log("you are underweight");
}else if(BMI>=18.5 && BMI<=24.9){
    console.log("you are normal");
}else if(BMI>=25 && BMI<=29.9){
    console.log("you are overweight");
}else{
    console.log("you are obese");
}

// task 3
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var studentNum = -87;

if(studentNum>=90 && studentNum<=100){
    console.log("your grade is A");
}else if(studentNum>=80 && studentNum<=89){
    console.log("your grade is B");
}else if(studentNum<=79 && studentNum>=70){
    console.log("your grade is C");
}else if(studentNum<=69 && studentNum>=60){
    console.log("your grade is D");
}else if(studentNum<0 || studentNum>=100){
    console.log("your value is not right");
}else{
    console.log("you are fail");
}

// task 
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var myScore = 80;
var friendScore = 97;

if (myScore>=80){
    if(friendScore>=80){
        console.log("let's go to a lunch");
    }else if(friendScore<80 && friendScore>=60){
        console.log("good luck next time");
    }else if(friendScore<60 && friendScore>=40){
        console.log("I will not seen my friend message");
    }else if(myfriend<40){
        console.log("my friend fail so i have to hide from his so it's batter is I have to take a deep sleep");
    }
}

// task 
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var number1 = 50;
var number2 = 30;

var result;

if(number1>number2){
    console.log(number1*2);
}else{
    console.log(number1+number2);
}

// in tarnary opatator

var tarnaryNum1 =56;
var tarnaryNum2 =70;

var result = (tarnaryNum1>tarnaryNum2) ? (tarnaryNum1*2) : (tarnaryNum1+tarnaryNum2);

console.log(result);

// task 6

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 34;
var isStudent = false;
var fair = 800;


if (age<=10){
    console.log("As you are a children so your fair is free");
}else if(isStudent){
    console.log("As you are a student so you have to give us 1/2 fair that's means " + fair/2 + " Tk");
}else if(age>=60){
    console.log("As you are a senior citizen that's why you have to give fair is" + (fair/100)*85 + "TK");
}else{
    console.log("our Bus fair is 800 Tk only")
}