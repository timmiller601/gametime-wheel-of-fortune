// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

import Game from './Game.js';
// import Player from './Player.js';
// import Wheel from './Wheel.js';
// import Puzzle from './Puzzle.js';
import domUpdates from './domUpdates.js';
// Tell webpack to use a CSS file
import './css/base.css';
import $ from 'jquery'; 

let game = new Game();
// $('#guess-button').prop('disabled', true);
// $('#vowel-button').prop('disabled', true);
// $('#solve-button').prop('disabled', true);
// $('#wheel-button').prop('disabled', true);

$('.start-button').on('click', function(e) {
  e.preventDefault();
  game.startGame(game);
  domUpdates.mustSpin();
})

$('#guess-button').on('click', function(e) {
  e.preventDefault();
  let val = game.wheels[game.currentRound].currentValue;
  if (val) {
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
  // $('#guess-button').prop('disabled', false);
  // $('#solve-button').prop('disabled', true);
  // $('#vowel-button').prop('disabled', true);
})

$('#new-game').on('click', function() {
  location.reload();
})


