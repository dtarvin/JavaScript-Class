// document.getElementById("hello").addEventListener("click",
//   function () {
//     alert("Hello world!");
//   });


// for (let i = 1; i <= 5; i++) {
//   console.log(`Number ${i}`);
// }
// console.log(`Loop ended`);


// while (condition) {
//   statements to be repeated
//   every time loop runs
// }

// let letter = prompt("Type the letter 'p'");
// while (letter != "p") {
//   alert("That's not the letter p!");
//   letter = prompt("Try again");
// }
// alert("Good job!");

// if (seniorDiscount === true) {
//   alert("You pay $10.");
// } else if (militaryDiscount === true) {
//   alert("You pay $12.");
// } else {
//   alert("You pay $15.");
// }

// if (response.data.errors != undefined) {
//   if (response.data.errors.status === 404) {
//     console.error("Not found");
//   } else if (response.data.errors.status === 500) {
//     console.error("Internal server error");
//   } else {
//     console.error('Unable to process request');
//   }
// } else {
//   console.log(`Response: ${response.data.response}`);
// }

// if (isMilitary === true || isSenior === true) {

// }

// if (!isVerified) {

// }

// const testGrade = "C"

// if (testGrade = "A") {
//   console.log('I did great on my test!')
// } else {
//   console.log('I could have done better.');
// }
// I did great on my test!

// let access = enteredPwd === storedPwd ? "allowed" : "denied";

// enteredPwd === storedPwd ? console.log("Logged in") : console.log("Access denied");   

// if (activity === "Get up") {
//   console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//   console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//   console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//   console.log("It is 12:00PM");
// } else if (activity === "Drive home") {
//   console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//   console.log("It is 6:30PM");
// } 

// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "Dinner":
//     console.log("It is 6:30PM");
//     break;
// }

let car = "Nissan Altima";
switch (car) {
  case "Subaru Outback":
    console.log("All-wheel drive");
    break;
  case "Ford F150":
    console.log("Workhorse");
    break;
  case "Dodge Grand Caravan":
    console.log("For the family");
    break;
  default:
    console.log("Regular car");
    break;
}
// Regular car

let neighbor = {
  name: "Bob",
  age: 29,
  address: {
    street: "123 Main St",
    city: "Sacramento",
    state: "CA",
    zip: "12345"
  },
  pets: ["dog", "cat"]
};