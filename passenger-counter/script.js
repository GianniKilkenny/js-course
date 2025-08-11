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

function increment() {
  count++;
  let c = document.getElementById("count");
  c.textContent = count;
}

function save() {
  console.log(`Your count is saved at ${count}`);
}
save;
