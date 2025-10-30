// * DOM
//* **********************************************
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const h1 = document.querySelector(".h1");
// * **********************************************

// * Useful Vars
//* **********************************************
let dice1Number = 6;
let dice2Number = 6;
let player = 1;
// * **********************************************

// * UI initializations
//* **********************************************
// Setting the inidital dice images

dice1.setAttribute("src", `./images/dice${dice1Number}.png`);
dice2.setAttribute("src", `./images/dice${dice2Number}.png`);
// * **********************************************

// * Functions
//* **********************************************
//Generates a random number from 1-6

const randomDice = function () {
  let randomDiceNumber = Math.floor(Math.random() * 6) + 1;
  return randomDiceNumber;
};

// For changing the Title
function changeText(dice1, dice2) {
  if (dice1 === dice2) {
    // Title when a win
    if (player === 1) {
      h1.textContent = `Player 1 💙 Won 🏆`;
      player = 2;
    } else {
      h1.textContent = `Player 2 ♥️ Won 🏆`;
      player = 1;
    }
  } else {
    // Title showing who's turn
    if (player === 1) {
      h1.textContent = `Player 1 💙`;
      player = 2;
    } else if (player === 2) {
      h1.textContent = `Player 2 ♥️`;
      player = 1;
    }
  }
}

// Changes the dice face if anything is clicked or pressed
function rollDice() {
  //Generated a random number from 1-6
  let randomDiceNumber1 = randomDice();
  let randomDiceNumber2 = randomDice();

  // Change the dice face after the first dice roll
  dice1.setAttribute("src", `./images/dice${randomDiceNumber1}.png`);
  dice2.setAttribute("src", `./images/dice${randomDiceNumber2}.png`);

  // Change the text to findout who's turn it is currently
  changeText(randomDiceNumber1, randomDiceNumber2);
}

// * **********************************************

// * Event Listeners
//* **********************************************
//Listening to any click on the whole website
document.addEventListener("click", () => {
  rollDice();
});

//Listening to 'space' keydown on the whole website
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    rollDice();
  }
});
// * **********************************************
