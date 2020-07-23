/*Question 1:
Take a number from a user and write a function which checks whether the number is even or
odd. Assign the result to a variable and log that variable in the console.
Example Input: 23
Output: The number entered is 23 and Number is odd*/

const prompt = require('prompt-sync')();
var number = prompt('Input(number):');
evenORodd(number);
function evenORodd(number)
{
var result="";
if(Number(number)%2==0)
{
result="even";
}
else
{
result="odd";
}
console.log("Output: The number entered is "+ number +" and Number is "+result);
}

/*Question 2:
Write a program which will take OS name and version from the user separated by a space.
Then log the OS name and version on the console.
Input: "Android 9"
Output: The OS name is Android and version is 9*/

const prompt1 = require('prompt-sync')();
var name = prompt1('Input(OS name and Version:');
var s=name.split(" ");
console.log("The OS name is "+s[0]+" and version is "+s[1]);

/*Question 3:
Write a program to take marks as input from the user and grade him accordingly. Use Conditional
statements. Also the same code using switch or ternary
input: 50
Output : Marks are 50 and grade is B*/

const prompt2 = require('prompt-sync')();
var mark = prompt2('Input(mark):');
var grade="";
switch(Number(mark))
{
case 100:
grade="O+";
break;
case 90:
grade="O";
break;
case 80:
grade="A+";
break;
case 70:
grade="A";
break;
case 60:
grade="B+";
break;
case 50:
grade="B";
break;
default:
grade="FAIL";
}
console.log("Output : Marks are "+mark+" and grade is "+grade);





