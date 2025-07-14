// function addTwoNumbers(num1, num2) {
//     alert(num1 + num2);
// }

// addTwoNumbers(8, 16);
// addTwoNumbers(9, 5);

// function getTriangleArea(base, height) {
//     let area = .5 * base * height;
//     return area;
// }

// getTriangleArea(5, 10);

// let base1 = prompt('What is the base of your triangle?');
// let height1 = prompt('What is the height of your triangle?');
// let area1 = getTriangleArea(base1, height1);
// alert(`The area of your triangle is ${area1}`);


let pocketChange = 5.63;
let lunchTimeLeft = 23;
let hasCheckbook = true;

// if (pocketChange > 6 || lunchTimeLeft > 30) {
//     console.log('I will have a ham and swiss please');
// }

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

// if (pocketChange > 6 && lunchTimeLeft > 8) {
//     console.log('I will have a ham and swiss please');
// } else {
//     console.log('I guess I will just have soup. :( ');
// }

// if (pocketChange > 5) {
//     console.log('I will have a ham and swiss please');
// } else if (hasCheckbook) {
//     console.log('Will you take a check?');
// }

// let testScore = prompt('What was your score on the test?');

// if (testScore >= 90) {
//     console.log('Terrific! You got an A!');
// } else if (testScore >= 80) {
//     console.log('Good job! You got a B!');
// } else if (testScore >= 70) {
//     console.log('Not bad. You got a C. You are about average.');
// } else if (testScore >= 60) {
//     console.log('A D? Did you not study?');
// } else {
//     console.log('An F??? Really?!? NO SOUP FOR YOU!!!');
// }

// var gold = 54;

// if (gold > 20) {
//     console.log('I am comfortable.');
// } else if (gold > 50) {
//     console.log('I am rich!!!')
// }

// let grade = "B";

// switch (grade) {
//     case "A":
//         console.log('Terrific!!!');
//         break;
//     case "B":
//         console.log('Great!');
//         break;
//     case "C":
//         console.log('Not bad.');
//         break;
//     case "D":
//         console.log('Not too good...');
//         break;
//     default:
//         console.log('You FAIL!!!!');
// }

// for (let i = 50; i >= 1; i -= 2) {
//     // console.log(`i = ${i}`);
//     if (i % 3 === 0) {
//         if (i % 7 === 0) {
//             continue;
//         } else {
//             console.log(`${i} is divisible by 3`);
//         }
//     }
// }

// let numberPicked = prompt('Pick a number between 1 and 10');
// while (numberPicked <= 10) {
//     console.log(`numberPicked is now ${numberPicked}`);
//     console.log(`Adding 1 to the numberPicked.`);
//     numberPicked++;
// }

// do {
//     console.log(`numberPicked is now ${numberPicked}`);
//     console.log(`Adding 1 to the numberPicked.`);
//     numberPicked++;
// } while (numberPicked <= 10);

// const states = ['Nebraska', 'Iowa', 'Missouri', 'Kansas'];
// console.log(states[3]);
// console.log(states[4]);

// const veggies = ['Asparagus', 'Broccoli', 'Cabbage', 'Pea', 'Zucchini'];

// for (let i = 0; i < veggies.length; i++) {
//     console.log(`Veggie number ${i + 1} is a ${veggies[i]}`);
// }

const book = {
    name: 'JavaScript: The Comprehensive Guide',
    price: 55.95,
    author: 'Philip Ackermann',
    isbn: '978',
    printDescription: function () {
        console.log(`${this.author}, author of ${this.name}`);
    }
}

// console.log(book.name);
// console.log(book.printDescription());

// console.log(`The price of the book is ${book['price']}`);

// let bookPrice = 'price';
// console.log(`The price of the book is ${book[bookPrice]}`);

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     contact: {
//         email: {
//             primary: 'jdoe@gmail.com',
//             secondary: 'john.doe@cox.net'
//         }
//     }
// }

// const james = {
//     firstName: 'James',
//     lastName: 'Doe'
// }

// if (john.contact.email.primary === 'jdoe@gmail.com') {
//     console.log('That is right!');
// } else {
//     console.log('That is wrong');
// }

// if (james.contact?.email?.primary && james.contact.email.primary == 'jdoe@gmail.com') {
//     console.log('That is right!');
// } else {
//     console.log('That is wrong');
// }

// if (james.contact && james.contact.email &&
//     james.contact.email.primary &&
//     james.contact.email.primary === 'jdoe@gmail.com') {
//     console.log('That is right!');
// } else {
//     console.log('That is wrong');
// }




// const shoppingCart = [          // start of outer array
//     [                           // first entry
//         'Record player',        // first element in the first array
//         200,                    // second element in the first array
//         1                       // third element in the first array
//     ],
//     [                           // second entry
//         'Loudspeaker',          // first element in the second array
//         400,                    // second element in the second array
//         2                       // third element in the second array
//     ],
//     [                           // third entry
//         'Preamplifier',         // first element in the third array
//         80,                     // second element in the third array
//         1                       // third element in the third array
//     ],
//     [                           // fourth entry
//         'Loudspeaker cables',   // first element in the fourth array
//         20,                     // second element in the fourth array
//         2                       // third element in the fourth array
//     ]
// ];                              // end of outer array


// console.log(shoppingCart[0][0]); // Output: Record player
// console.log(shoppingCart[0][1]); // Output: 200
// console.log(shoppingCart[0][2]); // Output: 1
// console.log(shoppingCart[1][0]); // Output: Loudspeaker
// console.log(shoppingCart[1][1]); // Output: 400
// console.log(shoppingCart[1][2]); // Output: 2
// console.log(shoppingCart[2][0]); // Output: Preamplifier
// console.log(shoppingCart[2][1]); // Output: 80
// console.log(shoppingCart[2][2]); // Output: 1
// console.log(shoppingCart[3][0]); // Output: Loudspeaker cables
// console.log(shoppingCart[3][1]); // Output: 20
// console.log(shoppingCart[3][2]); // Output: 2

// let word = "cat";
// console.log(word);
// console.log(word[0]);
// console.log(word[1]);

// word[0] = 'r';
// console.log(word);
// console.log(word[0]);

// word = "rat";

// const books = ['Caillou', 'Clifford', 'Madeline'];
// console.log(books[0]);
// books[0] = 'Thomas';
// console.log(books[0]);
// books = ['Hunger Games', 'Harry Potter', 'Insurgent'];

// let word1 = "cat";
// let word2 = word1;
// console.log(word1);
// console.log(word2);
// word1 = "rat";
// console.log(word1);
// console.log(word2);

// const bookList1 = ['Caillou', 'Clifford', 'Madeline'];
// const bookList2 = bookList1;
// console.log(bookList1);
// console.log(bookList2);
// bookList1[0] = 'Thomas';
// console.log(bookList1);
// console.log(bookList2);

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