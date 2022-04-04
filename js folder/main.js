//*********/ CONSTANTS *****************/
const colorChoices = [0, 1, 2, 3]; //this holds the array for the possible choices





//*********/ STATE VARIABLES ***********/
let levels; //this will be the variable for comparing if the userWonLevel, and 
// what level they are on, or if they lost and the game resets to level one
let intervals; //this variable will control the intervals between the lights flashing during 
// a level, and before the start of the next level. Also sets no time limit for the user
let loseCondition; //there is no win condition. You can only lose once the user can't
// follow the sequence.
let playerChoices; //this compares each player click to the random sequence generated by
// the computer.
let compTurn; //this stops the user from being able to interact with the page while the
// computerPattern plays.

//*********/ Event Listeners ***********/
document.getElementById('colorBtns').addEventListener('click', comparePattern) //example event listener
document.querySelector('');

// ******function********* //

function comparePattern() {

}

function blinkColor(color) { //need to make this my own, but for making the lights flash
    let colorButton = document.getElementById(color);
    colorButton.style.background = *highlightColor*;
    if(highlightColor == colorButton.style.background){
      setTimeout(() => {colorButton.style.background = *white(i.e.)*}, 1000);
    } else {
      setTimeout(() => {colorButton.style.background = *originalColor*}, 1000);
    }
  }

