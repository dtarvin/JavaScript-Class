// for loop
for (let i = 50; i >= 1; i -= 2) {
  // console.log(`i = ${i}`);
  if (i % 3 === 0) {
    if (i % 7 === 0) {
      continue;
    } else {
      console.log(`${i} is divisible by 3`);
    }
  }
}

// incrementing and decrementing in loops
var carrot = "^";
console.log(carrot);
for (var i = 0; i < 10; i++) {
  carrot += "^";  /* carrot = carrot + "^"; */
  console.log(carrot);
}

for (var i = 2; i <= 20; i += 2) {
  console.log("i is " + i);
}

for (var i = 19; i >= 0; i--) {
  console.log("i is " + i);
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

// while loop
let numberPicked = prompt('Pick a number between 1 and 10');
while (numberPicked <= 10) {
  console.log(`numberPicked is now ${numberPicked}`);
  console.log(`Adding 1 to the numberPicked.`);
  numberPicked++;
}

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


const states = ['Nebraska', 'Iowa', 'Missouri', 'Kansas'];
console.log(states[3]);
console.log(states[4]);

const veggies = ['Asparagus', 'Broccoli', 'Cabbage', 'Pea', 'Zucchini'];

for (let i = 0; i < veggies.length; i++) {
  console.log(`Veggie number ${i + 1} is a ${veggies[i]}`);
}

const book = {
  name: 'JavaScript: The Comprehensive Guide',
  price: 55.95,
  author: 'Philip Ackermann',
  isbn: '978',
  printDescription: function () {
    console.log(`${this.author}, author of ${this.name}`);
  }
}

console.log(book.name);
console.log(book.printDescription());

console.log(`The price of the book is ${book['price']}`);

let bookPrice = 'price';
console.log(`The price of the book is ${book[bookPrice]}`);

const john = {
  firstName: 'John',
  lastName: 'Doe',
  contact: {
    email: {
      primary: 'jdoe@gmail.com',
      secondary: 'john.doe@cox.net'
    }
  }
}

const james = {
  firstName: 'James',
  lastName: 'Doe'
}

if (john.contact.email.primary === 'jdoe@gmail.com') {
  console.log('That is right!');
} else {
  console.log('That is wrong');
}

if (james.contact?.email?.primary && james.contact.email.primary == 'jdoe@gmail.com') {
  console.log('That is right!');
} else {
  console.log('That is wrong');
}

if (james.contact && james.contact.email &&
  james.contact.email.primary &&
  james.contact.email.primary === 'jdoe@gmail.com') {
  console.log('That is right!');
} else {
  console.log('That is wrong');
}




const shoppingCart = [          // start of outer array
  [                           // first entry
    'Record player',        // first element in the first array
    200,                    // second element in the first array
    1                       // third element in the first array
  ],
  [                           // second entry
    'Loudspeaker',          // first element in the second array
    400,                    // second element in the second array
    2                       // third element in the second array
  ],
  [                           // third entry
    'Preamplifier',         // first element in the third array
    80,                     // second element in the third array
    1                       // third element in the third array
  ],
  [                           // fourth entry
    'Loudspeaker cables',   // first element in the fourth array
    20,                     // second element in the fourth array
    2                       // third element in the fourth array
  ]
];                              // end of outer array


console.log(shoppingCart[0][0]); // Output: Record player
console.log(shoppingCart[0][1]); // Output: 200
console.log(shoppingCart[0][2]); // Output: 1
console.log(shoppingCart[1][0]); // Output: Loudspeaker
console.log(shoppingCart[1][1]); // Output: 400
console.log(shoppingCart[1][2]); // Output: 2
console.log(shoppingCart[2][0]); // Output: Preamplifier
console.log(shoppingCart[2][1]); // Output: 80
console.log(shoppingCart[2][2]); // Output: 1
console.log(shoppingCart[3][0]); // Output: Loudspeaker cables
console.log(shoppingCart[3][1]); // Output: 20
console.log(shoppingCart[3][2]); // Output: 2

let word = "cat";
console.log(word);
console.log(word[0]);
console.log(word[1]);

word[0] = 'r';
console.log(word);
console.log(word[0]);

word = "rat";

const books = ['Caillou', 'Clifford', 'Madeline'];
console.log(books[0]);
books[0] = 'Thomas';
console.log(books[0]);
books = ['Hunger Games', 'Harry Potter', 'Insurgent'];

let word1 = "cat";
let word2 = word1;
console.log(word1);
console.log(word2);
word1 = "rat";
console.log(word1);
console.log(word2);

const bookList1 = ['Caillou', 'Clifford', 'Madeline'];
const bookList2 = bookList1;
console.log(bookList1);
console.log(bookList2);
bookList1[0] = 'Thomas';
console.log(bookList1);
console.log(bookList2);

const person = {
  name: "Bill",
  age: 54,
  2: "Thomsen",
  "Joe Cool": "Snoopy"
}
let i = "Joe Cool";
console.log(person.name);  // Bill
console.log(person["name"]);  // Bill
console.log(person[name]);  // undefined
console.log(person.state);  // undefined
person.state = "Nebraska";
console.log(person.state);  // Nebraska
console.log(person[2]);  // Thomsen
console.log(person['2']);  // Thomsen
console.log(person["Joe Cool"]);  // Snoopy
console.log(person[i]);  // Snoopy
console.log(person['i']);  // undefined
console.log(person);
delete person.name;
console.log(person.name);
console.log(person);
console.log('age' in person);  // true
console.log('name' in person);  // false
person["name"] = "Doug";
console.log(person.name);
console.log('name' in person);
person['2'] = 'Peterson';
console.log(person['2']);
person[1 + 1] = 'Smith';
console.log(person['2']);