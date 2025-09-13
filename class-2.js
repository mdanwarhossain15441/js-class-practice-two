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

// task 
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