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

let num1 = 8;
let num2 = 2;
let sum = 0;

document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;

function add() {
  sum = num1 + num2;
  document.getElementById("sum-0").textContent = `Sum: ${sum}`;
}
function subtract() {
  sum = num1 - num2;
  document.getElementById("sum-0").textContent = `Sum: ${sum}`;
}
function multiply() {
  sum = num1 * num2;
  document.getElementById("sum-0").textContent = `Sum: ${sum}`;
}
function divide() {
  sum = num1 / num2;
  document.getElementById("sum-0").textContent = `Sum: ${sum}`;
}
