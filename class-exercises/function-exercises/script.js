// parameters and arguments
function addTwoNumbers(num1, num2) {
  alert(num1 + num2);
}

addTwoNumbers(8, 16);
addTwoNumbers(9, 5);

// returning a value
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

