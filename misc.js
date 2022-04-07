//********************* section of functions I could possibly use *********************//

// function blinkColor(color) { //need to make this my own, but for making the lights flash
//     let colorButton = document.getElementById(color);
//     colorButton.style.background = highlightColor;
//     if(highlightColor == colorButton.style.background){
//       
//     } else {
//       setTimeout(() => {colorButton.style.background = originalColor}, 1000);
//     }
// };

// function getRandomRPS() { //change to getRandomColor? or getRandomPattern
//     const RPS = Object.keys(RPS_LOOKUP); //create constant like RPS_LOOKUP
//     const rndIdx = Math.floor(Math.random() * RPS.length); //re-define rndIdx to become rndColor maybe
//     return RPS[rndIdx]; //return new name for RPS and rndIdx
// };


// function renderCountdown(cb) { //possibly used to take whether user beat the level or not and display the level count to that button
//     let count = 3;
//     countdownEl.textContent = count;
//     countdownEl.style.visibility = 'visible';
//     countdownAudio.currentTime = 0;
//     countdownAudio.play();
//     const timerId = setInterval(function () {
//       count--;
//       if (count <= 0) {
//         clearInterval(timerId);
//         countdownEl.style.visibility = 'hidden';
//         cb();
//       } else {
//         countdownEl.textContent = count;
//       }
//     }, 1000);
// };


// function handleChoice(evt) { //maybe I could use this to handle to comparison of patternDisplayed to userClickedPattern?
//     if (evt.target.tagName !== 'BUTTON') return;
//     renderCountdown(function() {
//       results.p = evt.target.innerText.toLowerCase();
//       results.c = getRandomRPS();
//       if (results.p === results.c) {
//         winner = 't';
//       } else {
//         winner = RPS_LOOKUP[results.p].beats === results.c ? 'p' : 'c';
//       }
//       scores[winner]++;
//       render();
//     });
// }




// function genRandColor() { //Amar example of how to expand rounds
//   let rand = Math.random() * (3 - 0 + 1) + 0;
//   let randRound = Math.floor(rand)
//   return randRound;
// }





