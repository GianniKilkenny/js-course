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

// let course = {
//   title: "Learn CSS Grid for free",
//   lessons: 16,
//   creator: "Gianni Kilkenny",
//   length: 63,
//   level: 2,
//   isFree: true,
//   tags: ["html", "css"],
// };

// console.log(course["tags"]);

// let airbnb = {
//   title: "Castle",
//   price: 150,
//   bedrooms: 6,
//   bathrooms: 7,
//   squarefeet: 7600,
//   inRange: true,
//   colors: ["black", "grey", "white", "red"],
// };

// console.log(`$${airbnb.price} & ${airbnb.squarefeet}sqrft`);

// let person = {
//   name: "Gianni",
//   age: 21,
//   country: "USA",
// };

// function logData() {
//   console.log(
//     `${person.name} is ${person.age} years old and lives in ${person.country}`
//   );
// }

// logData();

// let age = 67;
// if (age < 6) {
//   console.log("Your get in for free");
// } else if (age > 6 && age < 18) {
//   console.log("You get the children discount");
// } else if (age > 17 && age < 27) {
//   console.log("You get the student price");
// } else if (age >= 27 && age <= 66) {
//   console.log("Sorry there will be no discount for you buddy");
// } else {
//   console.log("You get the senoir citizen discount fasho OG");
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// function loop() {
//   for (let i = 0; i < largeCountries.length; i++) {
//     console.log(`- ${largeCountries[i]}`);
//   }
// }

// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift();
// largeCountries.unshift("China");

// loop();

// let dayOfMonth = 13;
// let weekday = "friday";

// if (dayOfMonth === 13 && weekday.toLocaleLowerCase() === "friday") {
//   console.log("It is friday the 13th");
// }
// let hands = ["rock", "paper", "scissors"];

// function game() {
//   let randomNumber = Math.floor(Math.random() * 3);
//   console.log(`${hands[randomNumber]}`);
// }

// game();

// let fruits = ["apple", "orange", "apple", "apple", "orange"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function shelf() {
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "apple") {
//       appleShelf.textContent += ` ${fruits[i]}`;
//     } else {
//       orangeShelf.textContent += ` ${fruits[i]}`;
//     }
//   }
// }
// shelf();

// openBox = document
//   .getElementById("box")
//   .addEventListener("click", function openBox() {
//     console.log("I want to open the box");
//   });

// buyButton = document.getElementById("container");

// buyButton.innerHTML = "<button onclick = 'buy()'> Buy! </button>";

// function buy() {
//   buyButton.innerHTML += "<p>Thank you for buying!</p>";
// }

const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name, emoji) {
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
}

greetUser("Howdy", "seth", "💩");

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4));
console.log(add(9, 102));

function getfirst(arr) {
  console.log(arr[0]);
}
fruits = ["apples", "bananas"];
getfirst(fruits);
