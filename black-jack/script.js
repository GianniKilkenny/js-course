let firstCard = 10;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let cards = [firstCard, secondCard]; //ordered list of items

messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
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
  cardsEl.textContent = `Cards: ${cards[0]} & ${cards[1]}`;
}

function newCard() {
  let card = 2;
  sum += card;
  cards.push(card);
  renderGame();
}
