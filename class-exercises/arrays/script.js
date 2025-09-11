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
