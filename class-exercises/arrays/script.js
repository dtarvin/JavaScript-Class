// arrays
const states = ['Nebraska', 'Iowa', 'Missouri', 'Kansas'];
console.log(states[3]);
console.log(states[4]);

// looping over arrays
const veggies = ['Asparagus', 'Broccoli', 'Cabbage', 'Pea', 'Zucchini'];

for (let i = 0; i < veggies.length; i++) {
  console.log(`Veggie number ${i + 1} is a ${veggies[i]}`);
}

// multidimensional arrays
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

// index of characters in a string
let word = "cat";
console.log(word);
console.log(word[0]);
console.log(word[1]);

// immutability(???)
word[0] = 'r';
console.log(word);
console.log(word[0]);

word = "rat";

// reassigning array values
const books = ['Caillou', 'Clifford', 'Madeline'];
console.log(books[0]);
books[0] = 'Thomas';
console.log(books[0]);
books = ['Hunger Games', 'Harry Potter', 'Insurgent'];

// copy by (value or reference???)
let word1 = "cat";
let word2 = word1;
console.log(word1);
console.log(word2);
word1 = "rat";
console.log(word1);
console.log(word2);

// copy by (value or reference???)
const bookList1 = ['Caillou', 'Clifford', 'Madeline'];
const bookList2 = bookList1;
console.log(bookList1);
console.log(bookList2);
bookList1[0] = 'Thomas';
console.log(bookList1);
console.log(bookList2);

// push()
var cars = ["Subaru", "Audi", "Volkswagen"];
console.log("The third car in the list is " + cars[2]);
cars.push("Chevy");
cars.push("Ford");
cars.push("Honda");
cars.push("Toyota");
cars.push("Fiat");
cars.push("Buick");
cars.push("Jeep");
console.log(cars.length);
// ["Subaru", "Audi", "Volkswagen", "Chevy", "Ford", "Honda",
// "Toyota", "Fiat", "Buick", "Jeep"]

// pop() and splice()
const food = ["pizza", "wings", "fries", "salad", "soup"];
food.pop();
console.log(food);
food.push("cake", "ice cream", "chips");
console.log(food);
food.splice(2, 4);
console.log(food);
food.splice(1);
console.log(food);

// forEach

var vegetables = ["radish", "beets", "broccoli", "Brussels Sprouts", "Lima Beans"];

function listVegetables(veggies) {
  veggies.forEach(function (veggies) {
    console.log("I like to eat " + veggies);
  });
}

var numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number){
//     console.log("The number was " + number);
//     number *= number;
//     console.log("But now it's " + number);
// });

// forEach with arrow function
numbers.forEach((number) => {
  console.log("The number was " + number);
  number *= number;
  console.log("But now it's " + number);
});

// mutability of arrays
const a = [1, 2, 3]; // can't change the value of a constant
a = [1, 2, 3, 4, 5]; // "[Line 140] TypeError: Attempted to assign to readonly property."
a.push(4, 5); //mutating the value of constant "a"
console.log(a); // this will show (1, 2, 3, 4, 5)