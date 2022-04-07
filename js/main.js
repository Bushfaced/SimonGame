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

// ******function********* //
// This function sets up the initial conditions for a new game of Simon Says
function startGame() {
  level = 0;
  delay = 500;
  compTurn = true;
  pattern = [];
  initTurn();
};

function getRandomColor() {
  return Math.floor(Math.random() * 4);
}

// rename this to verbNoun
function initTurn() {
  // set color pattern for level 1
  level++;
  document.querySelector('#levelBtn').innerText = level;
  pattern.push(getRandomColor());
  console.log(pattern);
  renderPattern(0);
  compTurn = false;
  playerButtonCount = 0;
}

// what I googled: javascript loop through array with delay
// link to original code: https://stackoverflow.com/a/30865640/18523110
function renderPattern(i) {
  if (i < pattern.length) {
    //    flash the color
    blinkColor(pattern[i]);
    setTimeout(() => {
      i++;
      renderPattern(i);
    }, 350);
  }
};

function blinkColor(color) {
  // console.log("Flash button: " + colors[color]);
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
    // console.log('colorIndex = ' + colorIndex);
    if (isIncorrect(colorIndex)) {
      // this.message.innerText = 'You Lose!';
      compTurn = true;
    } else {
      playerButtonCount++;
      if (playerButtonCount === level) {
        // this.message.innerText = 'You beat the level!'
        compTurn = true;
        initTurn();
      }
    }
    
  }
};

function isIncorrect(colorIndex) {
  if (colorIndex !== pattern[playerButtonCount]) {
    return true;
  }
  return false;
}

function playAgain() {
  startGame();
};