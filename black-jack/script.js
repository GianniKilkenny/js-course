let firstCard = getRandomCard();
let secondCard = getRandomCard();
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
    hasBlackJack = true;
  } else {
    message = "damn i know yo pockets finna be hurting lil bro";
    isAlive = false;
  }

  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: `;

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
