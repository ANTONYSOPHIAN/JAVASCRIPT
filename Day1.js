/*Question 1 :
Explore and explain the various methods in console function*/

//1. clear() - Clears the console

console.clear();

//2. log() - Display any message
 
console.log("HELLO");

//OUTPUT - HELLO 


//3. count() - Count the number of times that particular console.count() is called

for (i = 0; i < 10; i++) {
  console.count();
}
/*OUTPUT  
default: 1
default: 2
default: 3
default: 4
default: 5
default: 6
default: 7
default: 8
default: 9
default: 10*/

//4. group()- indicates the start of a message group
console.log("I AM");
console.group();
console.log("Inside this group");
//OUTPUT - Inside this group

//5. table() - writes a table in the console view.

console.table(["ONE", "TWO", "THREE"]);

/*OUTPUT 
Array(3)
 0: "ONE"
 1: "TWO"
 2: "THREE"
length: 3

  ┌─────────┬─────────┐
  │ (index) │ Values  │
  ├─────────┼─────────┤
  │    0    │  'ONE'  │
  │    1    │  'TWO'  │
  │    2    │ 'THREE' │
  └─────────┴─────────┘
*/

/*QUESTION 2: Write the difference between var, let and const with code examples*/

//1. var - “var” is limited to the “function” within which it is defined. If it is defined outside any function, the scope of the variable is global.

{
 var one=133;
  console.log(one);
} //block 1
{
  one++;
  console.log(one);
} //block 2

/* OUTPUT:
133
134 */ 

//2. let - “let” is limited to the “block” defined by curly braces i.e. {} .

let two=100;
{
 console.log(two);
} //block 1
{
  two++;
  console.log(two);
} //block 2

/* OUTPUT:
100
101
*/


/*3. const - “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
“const” cannot be re-assigned to a new value. However it CAN be mutated.*/
const pi=3.14;
{
  console.log(pi);
} //block 1

{
//pi++;
  console.log(pi);
} //block 2

/* OUTPUT:
pi++;
  ^
TypeError: Assignment to constant variable.
    at Object.<anonymous> (D:\JAVASCRIPT\Day1.js:91:3)
    at Module._compile (internal/modules/cjs/loader.js:1156:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
    at Module.load (internal/modules/cjs/loader.js:1000:32)
    at Function.Module._load (internal/modules/cjs/loader.js:899:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
*/

/*Question 3 : Write a brief intro on available data types in Javascript.

JavaScript variables can hold many data types: numbers, strings, objects and more:

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object


1. JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:
Example
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes

2. JavaScript Numbers
JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:

Example
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

3.JavaScript Objects
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.

Example
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

4. Complex Data
The typeof operator can return one of two complex types:

function
object
The typeof operator returns "object" for objects, arrays, and null.

The typeof operator does not return "object" for functions.

Example
typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" 
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"*/


