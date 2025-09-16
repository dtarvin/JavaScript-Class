// for loop

// incrementing and decrementing in loops
var carrot = "^";
console.log(carrot);
for (var i = 0; i < 10; i++) {
  carrot += "^";  /* carrot = carrot + "^"; */
  console.log(carrot);
}


for (var i = 19; i >= 0; i--) {
  console.log("i is " + i);
}

// incrementing by 1
for (var i = 1; i <= 10; i++) {
  console.log("i is now " + i);
}
console.log('The loop has ended');

for (var i = 1; i < 10; i++) {
  console.log(i + " squared = " + i * i);
}

// decrementing by 1
for (var i = 10; i >= 1; i--) {
  console.log("i is now " + i);
}

// incrementing by more than 1
for (var i = 2; i <= 20; i += 2) {
  console.log("i is " + i);
}

for (var i = 3; i < 22; i += 3) {
  console.log("i is now " + i);
}

// looping through arrays
var cars = ["Toyota", "Nissan", "Honda", "Subaru"];
for (var i = 0; i < cars.length; i++) {
  console.log("Car " + (i + 1) + " is a " + cars[i]);
}
console.log("That's all the cars.");

// for loop with if/else statement
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd.");
  }
}
console.log("That's all folks!");

// for loop with nested if/else if/else statements

// Print the numbers 1 to 100, but if a number is divisible by 3, print "Fizz",
// if a number is divisible by 5, print "Buzz", and if a number is divisible by 
// both 3 and 5, print "FizzBuzz"
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log("FizzBuzz");
    }
    else console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


/* for loop with break statement */
for (i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    break;
  } else {
    console.log(i);
  }
}

/* for loop with continue statement */
for (i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

for (let i = 50; i >= 1; i -= 2) {
  console.log(`i = ${i}`);
  if (i % 3 === 0) {
    if (i % 7 === 0) {
      continue;
    } else {
      console.log(`${i} is divisible by 3`);
    }
  }
}

// while loop
let numberPicked = prompt('Pick a number between 1 and 10');
while (numberPicked <= 10) {
  console.log(`numberPicked is now ${numberPicked}`);
  console.log(`Adding 1 to the numberPicked.`);
  numberPicked++;
}

//while loops
var numMonkeys = 8;
while (numMonkeys > 0) {
  console.log(numMonkeys + " little monkeys jumping on the bed.");
  numMonkeys--;
}
console.log("no more monkeys jumping on the bed!");

var numBooks = 11;
while (numBooks < 10) {
  console.log("Number of books is " + numBooks);
  numBooks++;
}
console.log("While loop ended");

var i = 3;
while (i < cars.length) {
  console.log("Car number " + [i + 1] + " is a " + cars[i]);
  i++;
}

i = 1
while (i <= 10) {
  console.log(i + " times 3 = " + i * 3);
} i++;

/* while loop where number of iterations
 * is uncertain */
let num = 0;
while (num != 12) {
  num = prompt("Enter a number");
}
alert("You got it!");

var k = 0;
while (k <= 20) {
  console.log("k is " + k);
  k += 3;
}

// do-while loop
do {
  console.log(`numberPicked is now ${numberPicked}`);
  console.log(`Adding 1 to the numberPicked.`);
  numberPicked++;
} while (numberPicked <= 10);

var numBooks = 11;
do {
  console.log("Number of books is " + numBooks);
} while (numBooks < 10);
console.log("Do while loop ended.");

do {
  console.log(i + "times 4 = " + i * 4);
  i++;
} while (i <= 10);


// while loops vs do-while loops

console.log("while loop with m started");
var m = 30;
while (m <= 20) {
  console.log("m is " + m);
  m += 3;
}
console.log("while loop with m ended");

console.log("do-while loop with n started");
var n = 30;
do {
  console.log("n is " + n);
} while (n <= 20);
console.log("do-while loop with n ended");
