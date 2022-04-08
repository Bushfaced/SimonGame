//*********/ CONSTANTS *****************/

const colors = ['red', 'green', 'blue', 'purple'];
const flashColors = ['pink', 'limegreen', 'cyan', 'lavender'];

//*********/ STATE VARIABLES ***********/
let results;
let delay;
let playerButtonCount;
let compTurn;
let pattern = [];
let level;

//*********/ Event Listeners ***********/
document.querySelector('.colorBtns').addEventListener('click', clickedButtons);
document.querySelector('#startBtn').addEventListener('click', startGame);
document.querySelector('#playAgainBtn').addEventListener('click', playAgain);
const message = document.querySelector('#message');

// ****** FUNCTIONS ********* //

function startGame() {
  level = 0;
  delay = 500;
  compTurn = true;
  pattern = [];
  document.getElementById('message').style.display = "none";
  initTurn();
};

function getRandomColor() {
  return Math.floor(Math.random() * 4);
};

function initTurn() {
  level++;
  document.querySelector('#levelBtn').innerText = level;
  pattern.push(getRandomColor());
  renderPattern(0);
  compTurn = false;
  playerButtonCount = 0;
};

// what I googled: javascript loop through array with delay
// link to original code: https://stackoverflow.com/a/30865640/18523110
function renderPattern(i) {
  if (i < pattern.length) {
    blinkColor(pattern[i]);
    setTimeout(() => {
      i++;
      renderPattern(i);
    }, 350);
  }
};

function blinkColor(color) {
  let button = document.querySelector('#' + colors[color]);
  button.style.backgroundColor = flashColors[color];
  setTimeout(() => {
    button.style.backgroundColor = '';
  }, 250);
};

function clickedButtons(evt) {
  if (compTurn === false) {
    let buttonColor = evt.target.id;
    let colorIndex = colors.indexOf(buttonColor);
    if (isIncorrect(colorIndex)) {
      document.getElementById('message').style.display = "block";
      message.innerText = message.textContent = 'You lost!';
      compTurn = true;
    } else {
      playerButtonCount++;
      if (playerButtonCount === level) {
        document.getElementById('message').style.display = "block";
        message.innerText = message.textContent = 'Correct! Next!';
        compTurn = true;
        initTurn();
      };
    };

  };
};

function isIncorrect(colorIndex) {
  if (colorIndex !== pattern[playerButtonCount]) {
    return true;
  };
  return false;
};

function playAgain() {
  startGame();
};