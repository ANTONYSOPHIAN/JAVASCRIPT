/*Question 1:
Write a JS code which takes input from the user and logs it in the console.*/

//ANS1: include the built-in "process" object and "readline" module. 
const RL = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

RL.question('PLEASE ENTER YOUR FIRSTNAME?', name => {
  console.log(`WELCOME ${name}!`);
  RL.close();
});

//ANS2: install "npm install prompt-sync"
const prompt = require('prompt-sync')();

const name = prompt('PLEASE ENTER YOUR LASTNAME?');
console.log(`WELCOME ${name}`);

//ANS3: USERS EXIT
const prompt1 = require('prompt-sync')({sigint: true});
const AGE = prompt1('ENTER NUMBER: ');
console.log('Your AGE + 4 =');
console.log(Number(AGE) + 4);


/*Question 2:
Explain with examples the remaining methods of String and Array*/

//1.ARRAY FUNCTIONS

var students = ["DEVI", "GEETHA", "RAVI", "RAJA"];

//a. push(...items) – adds items to the end

students.push("JOHN");
console.log("PUSH()",students);

//b.pop() – extracts an item from the end

students.pop();
console.log("POP()",students);

//c. shift() – extracts an item from the beginning

students.shift();
console.log("shift()",students);

//d. unshift(...items) – adds items to the beginning.

students.unshift("JOHN"); 
console.log("unshift()",students);

//e. splice(pos, deleteCount, ...items) – at index pos delete deleteCount elements and insert items.
students.splice(2, 0, "JOHN", "GEETHA");
console.log("splice()",students);

//f. slice(start, end) – creates a new array, copies elements from position start till end (not inclusive) into it.
var outputslice = students.slice(1, 3);
console.log("slice()",outputslice);

//g. concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
var outputconcat = students.concat("JAMES");
console.log("concat()",outputconcat);
  
/*OUTPUT :ARRAY FUNCTION
PUSH() [ 'DEVI', 'GEETHA', 'RAVI', 'RAJA', 'JOHN' ]
POP() [ 'DEVI', 'GEETHA', 'RAVI', 'RAJA' ]
shift() [ 'GEETHA', 'RAVI', 'RAJA' ]
unshift() [ 'JOHN', 'GEETHA', 'RAVI', 'RAJA' ]
splice() [ 'JOHN', 'GEETHA', 'JOHN', 'GEETHA', 'RAVI', 'RAJA' ]
slice() [ 'GEETHA', 'JOHN' ]
concat() [
  'JOHN',  'GEETHA',
  'JOHN',  'GEETHA',
  'RAVI',  'RAJA',
  'JAMES'
]
*/

//2. STRING FUNCTIONS

var S="Welcome all";

//a. toUpperCase(): returns the uppercase string.

console.log("toUpperCase() - ",S.toUpperCase());

//b. toLowerCase(): returns the lowercase string.
console.log("toLowerCase() - ",S.toLowerCase());

//c. charAt(index): returns the character at the index position. Index begins from 0. Negative index can be used, which counts from the end of the string.
console.log("charAt(3) - ",S.charAt(3));

//d. substring(beginIndex, endIndex): returns the substring from beginIndex (inclusive) to endIndex (exclusive).
console.log("substring(1, 3) - ",S.substring(1, 3));

//e. substr(beginIndex, length): returns the substring from beginIndex of length.
console.log("substr(2, 2) - ",S.substr(2, 2));

//f. indexOf(searchString, fromIndex?): Return the beginning index of the first occurrence of searchstring, starting from an optional fromIndex (default of 0); or -1 if not found.
console.log("indexOf(el, 1) - ",S.indexOf("el", 1));

//g. lastIndexOf(searchString, fromIndex?): Return the beginning index of the last occurrence of substring, starting from an optional fromIndex (default of string.length); or -1 if not found.
console.log("lastIndexOf(all, 1) - ",S.lastIndexOf("all", 1));

//h. slice(beginIndex, endIndex): Return the substring from beginIndex (inclusive) to endIndex (exclusive).
console.log("slice(2, 5) - ",S.slice(2, 5));

//i. split(delimiter): returns an array by splitting the string using delimiter.
console.log("split() - ",S.split(" "));

/*OUTPUT - STRING FUNCTIONS
toUpperCase() -  WELCOME ALL
toLowerCase() -  welcome all
charAt(3) -  c
substring(1, 3) -  el
substr(2, 2) -  lc
indexOf(el, 1) -  1
lastIndexOf(all, 1) -  -1
slice(2, 5) -  lco
split() -  [ 'Welcome', 'all' ]*/

/*Question 3:
Ask the user if he is 21+ and log the value "Can drink", "Cannot Drink".*/

//ANS

const prompt2 = require('prompt-sync')({sigint: true});
var YEAR = prompt2('WHAT IS YOUR AGE ??? ');
if(YEAR>21)
{
console.log('Can drink');
}
else
{
console.log('Cannot Drink');
}

/* OUTPUT
WHAT IS YOUR AGE ??? 1
Cannot Drink
*/