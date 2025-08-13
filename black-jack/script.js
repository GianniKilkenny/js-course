let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = []; //ordered list of items

let player = {
  name: "Gianni",
  chips: 145,
};

let playerEl = document.getElementById("player-el");

playerEl.textContent = `${player.name}: $${player.chips}`;

messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber < 11) {
    return randomNumber;
  } else {
    return 10;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
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
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    message = "Sorry Lil bro the Game is over";
    messageEl.textContent = message;
  }
}
