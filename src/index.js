import Game from './Game.js';
import domUpdates from './domUpdates.js';
import './css/base.css';
import $ from 'jquery'; 

let game = new Game();


$('.start-button').on('click', function(e) {
  e.preventDefault();
  game.startGame(game);
  domUpdates.mustSpin();
})

$('#guess-button').on('click', function(e) {
  e.preventDefault();
  let val = game.wheels[game.currentRound].currentValue;
  if (val === 0) {
    domUpdates.mustSpinBuyOrSolve();
  }
  if (val)  {
    game.puzzles[game.currentRound].checkGuess(game);
    domUpdates.mustSpinBuyOrSolve();
    domUpdates.clearInput();
  } else {
    domUpdates.mustSpinMessage();
    domUpdates.mustSpin();
  }
})

$('#vowel-button').on('click', function(e) {
  e.preventDefault();
  game.puzzles[game.currentRound].checkVowel(game);
  domUpdates.mustSpinBuyOrSolve();
  domUpdates.clearInput();
})

$('#solve-button').on('click', function(e) {
  e.preventDefault();
  game.puzzles[game.currentRound].checkSolve(game);
  domUpdates.mustSpinBuyOrSolve();
  domUpdates.clearInput();
})

$('.wheel').on('click', function(e) {
  e.preventDefault();
  game.wheels[game.currentRound].spin(game);
  domUpdates.mustGuess();
})

$('#new-game').on('click', function() {
  location.reload();
})


