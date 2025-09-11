// if statement
/* 1. if statement with no other parts
  /* if (something is true) {
    take this action
  } */
/* if condition is not true, nothing happens */

var housePrice = "400000";

if (housePrice < 300000) {
  console.log("We can afford this house!");
}

/* 2. if/else statement
  if (something is true) {
      take this action
  } else {
      take this other action
  } */
// something always happens

var weather = "sunny";
if (weather == "rainy") {
  console.log("take an umbrella");
} else {
  console.log("You don't need an umbrella today!");
}

/* 3. if/else-if statement
  if (something is true) {
      take an action
  } else if (something else is true) {
      take a different action
  } */
// if nothing is true, nothing happens

let sweaterColor = 'green';
if (sweaterColor === 'yellow') {
  console.log("Yellow isn't really your color.");
} else if (sweaterColor === 'blue') {
  console.log("Blue is much better on you.");
}

/* 3. if/else-if/else statement
  if (something is true) {
    take an action
  } else if (something else is true) {
    take a different action
  } else {
    none of the conditions are true so take this action
  } */
// something always happens

let testScore = prompt('What was your score on the test?');

if (testScore >= 90) {
  console.log('Terrific! You got an A!');
} else if (testScore >= 80) {
  console.log('Good job! You got a B!');
} else if (testScore >= 70) {
  console.log('Not bad. You got a C. You are about average.');
} else if (testScore >= 60) {
  console.log('A D? Did you not study?');
} else {
  console.log('An F??? Really?!? NO SOUP FOR YOU!!!');
}

// logical operators
// AND operator
//  1. true  2. true  r: true
//  1. false 2. true  r: false
//  1. true  2. false r: false
//  1. false 2. false r: false

// OR operator
//  1. true  2. true  r: true
//  1. false 2. true  r: true
//  1. true  2. false r: true
//  1. false 2. false r: false

let pocketChange = 5.63;
let lunchTimeLeft = 23;
let hasCheckbook = true;

// if statement
if (pocketChange > 6 || lunchTimeLeft > 30) {
  console.log('I will have a ham and swiss please');
}

// if/else statement
if (pocketChange > 6 && lunchTimeLeft > 8) {
  console.log('I will have a ham and swiss please');
} else {
  console.log('I guess I will just have soup. :( ');
}

// if/else-if statement
if (pocketChange > 5) {
  console.log('I will have a ham and swiss please');
} else if (hasCheckbook) {
  console.log('Will you take a check?');
}

// if/else if/else

// nested if statements

// order of conditions
var gold = 54;

if (gold > 20) {
  console.log('I am comfortable.');
} else if (gold > 50) {
  console.log('I am rich!!!')
}

// switch statement
let grade = "B";

switch (grade) {
  case "A":
    console.log('Terrific!!!');
    break;
  case "B":
    console.log('Great!');
    break;
  case "C":
    console.log('Not bad.');
    break;
  case "D":
    console.log('Not too good...');
    break;
  default:
    console.log('You FAIL!!!!');
}
