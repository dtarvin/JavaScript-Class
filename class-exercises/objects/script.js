// objects
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

// nested objects
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

// optional operator(???)
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

// changing, deleting, adding and referencing object properties and values
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

// objects in arrays in objects
var student = {
  firstName: "Henry",
  lastName: "Jackson",
  id: 12345,
  courses: [
    {
      class: "Full-Stack Java",
      instructor: {
        firstName: "Steve",
        lastName: "Wozniak"
      },
      gradePercentage: 97
    },
    {
      class: "Calculus",
      instructor: {
        firstName: "Bill",
        lastName: "Gates"
      },
      gradePercentage: 86
    }
  ]
}

console.log('My name is ' + student.firstName + ' ' + student.lastName + ', and I am taking ' + student.courses.length + ' courses.');
console.log('My first course is ' + student.courses[0].class + ', taught by ' + student.courses[0].instructor.firstName + ' ' + student.courses[0].instructor.lastName + '.');
console.log('I am getting a ' + student.courses[0].gradePercentage + ' in ' + student.courses[0].class + '.');

// nested objects
const company = {
  name: "Fisherman's Delight",
  address: {
    streetAddress: "123 South St",
    city: "Omaha",
    state: "NE",
    zip: 681371234
  },
  phoneNumber: 5551234567,
  employeeCount: 25
}
console.log("The name of the company is " + company.name + ". It is located at " +
  company.address.streetAddress + " " + company.address.city + ", " + company.address.state +
  " " + company.address.zip + " and its phone number is " + company.phoneNumber +
  ". The company has " + company.employeeCount + " employees.");
console.log(`The name of the company is ${company.name}. It has ${company.employeeCount} employees`);

const b = { name: "hello" }; // can't assign new value
b = { name: "world" }; // "[Line 139] TypeError: Attempted to assign to readonly property."
b.name = "world"; // mutating the value of constant "b"
console.log(b); // this will show {name: "world"}
