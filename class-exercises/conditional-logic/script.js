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

var apples = 15;
if (apples > 3) {
  console.log("Let's make tarts!");
} else if (apples > 10) {
  console.log('Let us make a pie! We can use the "Betty Crocker" cookbook!');
}

var numOfStudents = 13;
if (numOfStudents > 20) {
  console.log("Too many students");
} else if (numOfStudents > 15) {
  console.log("Good number of students");
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

// var testScore = 70;
// if (testScore > 99) {
//     console.log("You aced it!");
// } else if (testScore >= 70) {
//     console.log("You passed.");
// } else {
//     console.log("I'm sorry, you didn't pass.");
// }

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

var grade = 73;
if (grade >= 90) {
  console.log("You got an A!");
} else if (grade >= 80) {
  console.log("You got a B");
} else if (grade >= 70) {
  console.log("You got a C");
} else if (grade >= 60) {
  console.log("You got a D");
} else {
  console.log("Sorry, you got an F");
}

var zombies = 2;
if (zombies > 10) {
  console.log('AAAARRRGGGHHH! ZOMBIES!!!');
} else if (zombies > 5) {
  console.log('Gotta stay away from those zombies!');
} else {
  console.log('Not a lot of zombies today.');
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

var areWerewolvesHere = true;

function werewolfCheck(areWolves) {
  if (!areWolves) {
    console.log("No werewolves here!");
  } else {
    console.log("Werewolves! Get me outta here!");
  }
}

werewolvesCheck(true);
werewolvesCheck(False);


// if/else-if statement
if (pocketChange > 5) {
  console.log('I will have a ham and swiss please');
} else if (hasCheckbook) {
  console.log('Will you take a check?');
}

// if/else if/else

// nested if statements
var vampire = 12;
var night = false;
//if (vampires > 12 && night == true) {
//    console.log("SAVE ME FROM THE VAMPIRES!!")
//} else if (vampires <= 12 && night == true) {
//    console.log("Please help me escape the vampires!");
//}else if (vampires <= 12 && night == false) {
//    console.log("Thank goodness vampire sleep during the day!");
//}

// when you have two conditions and two things may
// happen if one is set to one value depending
// on if the other is true or false
if (night) {
  if (vampires > 12) {
    console.log("SAVE ME FROM THE VAMPIRES!!");
  } else {
    console.log("Please help me escape the vampires!");
  }
} else if (!night) {
  if (vampires <= 12) {
    console.log("Thank goodness vampire sleep during the day!");
  }
}

// order of conditions
var gold = 54;

if (gold > 20) {
  console.log('I am comfortable.');
} else if (gold > 50) {
  console.log('I am rich!!!')
}

var apples = 15;
if (apples > 3) {
  console.log("Let's make tarts!");
} else if (apples > 10) {
  console.log('Let us make a pie! We can use the "Betty Crocker" cookbook!');
}

var numOfStudents = 13;
if (numOfStudents > 20) {
  console.log("Too many students");
} else if (numOfStudents > 15) {
  console.log("Good number of students");
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

// ternary operator
function isVotingAge(name, age) {
  var votable = (age < 18) ? "Too young" : "Old enough";
  console.log(name + " is " + votable + " to vote.")
}

isVotingAge("John", 17);
isVotingAge("Pan", 35);
