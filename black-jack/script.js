let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");

function startGame() {
  if (sum <= 20) {
    message = "do you want to draw a new card lil bro?";
  } else if (sum === 21) {
    message = "just take the bread lil bro";
    let hasBlackJack = true;
  } else {
    message = "damn i know yo pockets finna be hurting lil bro";
    let isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: ${firstCard} & ${secondCard}`;
}

// let age = 100;

// if (age < 100) {
//   console.log("You still a youngin");
// } else if (age === 100) {
//   console.log("Here is your bitrthday card from the King!");
// } else {
//   console.log("Man stop cappin you already got the shit you old ass mf");
// }
