// document.getElementById("count").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;

// let count = firstBatch + secondBatch;

// console.log(count);

// let myAge = 21;
// let humanDogRatio = 7 / 1;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count++;
  let c = document.getElementById("count");
  c.textContent = count;
}

function save() {
  let savedNum = ` ${count} - `;
  saveEl.textContent += savedNum;

  console.log(`Your count is saved at ${count}`);
}

// let username = "yanni";

// let message = "You have three new notificaitons";
// let messageToUser = username + ", " + message;

// console.log(messageToUser);

// let name = 42;
// let greeting = "Hi my name is";

// let myGreeting = greeting + ", " + name;
// console.log(myGreeting);
