// let welcomeEl = document.getElementById("welcome-el");

// let name = "Gianni";
// let greeting = "Welcome back, ";

// welcomeEl.textContent = greeting + name;

// welcomeEl.textContent += " 🫵";

// let firstName = "gianni";
// let lastName = "kilkenny";

// let fullName = `${firstName} ${lastName}`;

// console.log(fullName);

// let name = "linda";
// let greeting = "Hi There";

// function personalGreeting() {
//   console.log(`${greeting}, ${name}`);
// }

// personalGreeting();

// let myPoints = 3;

// function add3Points() {
//   myPoints += 3;
// }

// function remove1Point() {
//   myPoints -= 1;
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();

// console.log(myPoints);

//1 . = 22
//2 . = 18
//3 . = 65
//4 . = My points: 59
//5 . = 4
//6 . = 1114

// let errorMessage = document.getElementById("error");
// function error() {
//   errorMessage.textContent = "Something went wrong, please try again";
// }

// let num1 = 8;
// let num2 = 2;
// let sum = 0;

// document.getElementById("num1").textContent = num1;
// document.getElementById("num2").textContent = num2;

// function add() {
//   sum = num1 + num2;
//   document.getElementById("sum-0").textContent = `Sum: ${sum}`;
// }
// function subtract() {
//   sum = num1 - num2;
//   document.getElementById("sum-0").textContent = `Sum: ${sum}`;
// }
// function multiply() {
//   sum = num1 * num2;
//   document.getElementById("sum-0").textContent = `Sum: ${sum}`;
// }
// function divide() {
//   sum = num1 / num2;
//   document.getElementById("sum-0").textContent = `Sum: ${sum}`;
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i]);
// }

// let sentence = ["Hello", "my", "name", "is", "Gianni"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += ` ${sentence[i]}`;
// }

// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time;
//   } else if (player2Time < player1Time) {
//     return player2Time;
//   } else {
//     return player1Time;
//   }
// }

// let fastestRace = getFastestRaceTime();

// console.log(fastestRace);

// function totalRaceTime() {
//   return player1Time + player2Time;
// }

// let totalTime = totalRaceTime();
// console.log(totalTime);

// A random whole number between 0 and 5 (not including 6)

// let floorNumber = Math.floor(3.956456);
// console.log(floorNumber);
// // Rounds the number down to the nearest whole number

// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }

// console.log(rollDice());

// let hasCompletedCourse = true;
// let giversCertificate = true;

// if (hasCompletedCourse && giversCertificate) {
//   generateCertificate();
// }

// function generateCertificate() {
//   console.log("Generating certificate....");
// }

// let hasSolvedChallenge = true;
// let hasHintsLeft = false;
// function showSolution() {
//   console.log("Showing the solution...");
// }
// if (hasSolvedChallenge || hasHintsLeft) {
//   showSolution();
// }

let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Gianni Kilkenny",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

console.log(course["tags"]);

let airbnb = {
  title: "Castle",
  price: 150,
  bedrooms: 6,
  bathrooms: 7,
  squarefeet: 7600,
  inRange: true,
  colors: ["black", "grey", "white", "red"],
};

console.log(`$${airbnb.price} & ${airbnb.squarefeet}sqrft`);
