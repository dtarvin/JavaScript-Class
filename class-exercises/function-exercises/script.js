function printHelloWorld() {
  console.log("Hello World!");
}

printHelloWorld();

function sayGoodbye() {
  var goodBye = "So long!";
  console.log(goodBye);
}
sayGoodbye();
console.log(goodBye);

// using variables from outside function
var greeting = "Hello";
function sayGreeting() {
  console.log(greeting);
}
sayGreeting();
console.log(greeting);

var student = "Mike";

function helloStudent() {
  console.log("Hello " + student);
}

helloStudent();
console.log("Hey " + student);

var secondStudent = "Cory";
function helloSecondStudent() {
  var secondStudent = "Katie";
  console.log("Hello " + secondStudent);
}

console.log("Hi there " + secondStudent);
helloSecondStudent();
console.log("Hi there " + secondStudent);

function helloThirdStudent() {
  var thirdStudent = "Joe";
  console.log("What's up " + thirdStudent);
}
helloThirdStudent();
console.log("How's it hanging' " + ThirdStudent);

function add3Plus5() {
  var total = 3 + 5;
  console.log("Total is " + total);
}

add3Plus5();

// parameters and arguments
function addTwoNumbers(num1, num2) {
  alert(num1 + num2);
}

addTwoNumbers(8, 16);
addTwoNumbers(9, 5);

// function addTwoNumbers(num1, num2) {
//   var sum = num1 + num2;
//   console.log(num1 + " + " + num2 + " = " + sum);
// }

// addTwoNumbers(5, 8);
// addTwoNumbers(12, 16);
// addTwoNumbers(-2, 2);

// returning a value
function addTwoNumbers(num1, num2) {
  var total = num1 + num2;
  console.log("Total is " + total);
  return total;
}
addTwoNumbers(7, 12);

var price = addTwoNumbers(7, 12);
console.log("The price is " + price);

function getTriangleArea(base, height) {
  let area = .5 * base * height;
  return area;
}

getTriangleArea(5, 10);

// assigning the return value of a function to a variable
let base1 = prompt('What is the base of your triangle?');
let height1 = prompt('What is the height of your triangle?');
let area1 = getTriangleArea(base1, height1);
alert(`The area of your triangle is ${area1}`);

var houseArea;
var housePerimeter;

function getAreaOfHouse(length, width) {
  var area = length * width;
  return area;
}

function getPerimeterOfHouse(length, width) {
  var perimeter = (2 * length) + (2 * width);
  return perimeter;
}

var houseLength = 30;
var houseWidth = 15;

houseArea = getAreaOfHouse(houseLength, houseWidth);
housePerimeter = getPerimeterOfHouse(houseLength, houseWidth);

console.log(`My house is ${houseLength} feet by ${houseWidth} feet.` +
  ` It has an area of ${houseArea} square feet and a perimeter of ${housePerimeter} feet.`);

console.log("My house is " + houseLength + " feet by " + houseWidth + " feet. " +
  "It has an area of " + houseArea + " square feet and a perimeter of " + housePerimeter + " feet.");

// can use below to show function with same name but diff params is unique
function addTwoNumbers() {
  console.log("2 plus 3 equals" + (2 + 3));
}

addTwoNumbers();

function multiplyTwoNumbers(num1, num2) {  /* num1 & num2 are parameters */
  console.log("The product is " + (num1 * num2));
}

multiplyTwoNumbers(5, 6); /* num1 = 5, num2 = 6, these are arguments */

multiplyTwoNumbers(2, 9);

// scope
// global var different from local var 
var total = 3;
function getTotal() {
  var total = 5;
  console.log("Total in function = " + total);
}
getTotal();
console.log("Total outside function = " + total);

var x = 2;

function increaseXByFour() {
  var x = 1;
  x = x + 4;
  console.log(x);
}

console.log(x);
increaseXByFour();
console.log(x);

// accessing global var locally (in function)
var y = 2;

function increaseYByFour() {
  y = 1;
  y = y + 4;
  console.log(y);
}

console.log(y);
increaseYByFour();
console.log(y);

var a = 'Hello';
function change() {
  a = 3;
}
console.log(a); // Hello
change();
console.log(a); // 3

// function scope
function greet() {
  var a = 'Hello';
}
greet();
console.log(a);
// Uncaught ReferenceError:
// a is not defined

function areTrekkiesHere(areOtherOfficers) {
  var shatner = "Kirk";
  let nimoy = "Spock";
  const takai = "Sulu";
  console.log("The Captain is " + shatner);
  console.log("The First Officer is " + nimoy);
  console.log("The pilot is " + takai);
  if (areOtherOfficers) {
    var nichols = "Uhura";
    // var kelley = "Bones";
  }
  console.log("The Comes Officer is " + nichols);
  // console.log("The Doctor is " + kelley);
  // takai = "Checkov";
  // console.log("The Doctor is " + kelley);
}

// can't access function variables outside function
function getMeasurements(length, width) {
  if (length > 40 && width > 20) {
    let perimeter = 2 * length + 2 * width;
  } else {
    console.log("You have too small a house to care about the perimeter.");
  }
  console.log("The perimeter of your house is " + perimeter + " feet.");
}
getMeasurements(50, 50);
console.log(perimeter);  // "[Line 8] ReferenceError: Can't find variable: perimeter"

// arrow functions
var numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number){
//     console.log("The number was " + number);
//     number *= number;
//     console.log("But now it's " + number);
// });

numbers.forEach((number) => {
  console.log("The number was " + number);
  number *= number;
  console.log("But now it's " + number);
});

// var scope (function scope) vs let scope (block scope)

// var
var total = 1;
function testFunctionScope(test) {
  var total = 3;
  if (test) {
    var total = 5;
    console.log(`if block total: ${total}`); // 5
  }
  console.log(`outside if block total: ${total}`); // 5
}
console.log(`outside function total: ${total}`); // 1
testFunctionScope(true);
console.log(`after calling function total: ${total}`); // 1

// let
let total = 1;
function testFunctionScope(test) {
  let total = 3;
  if (test) {
    let total = 5;
    console.log(`if block total: ${total}`); // 5
  }
  console.log(`outside if block total: ${total}`); // 3
}
console.log(`outside function total: ${total}`); // 1
testFunctionScope(true);
console.log(`after calling function total: ${total}`); // 1