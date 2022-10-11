/*Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let age = 11;
let message;

if (age === 25){
    message = " you are 25 years old";
}else if(age >= 20 && age <= 25){
    message = "young"
}else if (age >= 30 && age < 50){
    message = "greater than equal to 30"
}else if (age >= 50){
    message = " old"
}else if (age< 20 && age >15){
    message = "a teenager"
}else if (age<= 15 && age >= 12){
    message = "boy"
}else {
    message = " not allowed, you are a kid"
}

console.log (message)