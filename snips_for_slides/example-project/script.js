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

let letter = prompt("Type the letter 'p'");
while (letter != "p") {
  alert("That's not the letter p!");
  letter = prompt("Try again");
}
alert("Good job!");