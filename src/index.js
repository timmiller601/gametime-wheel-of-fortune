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
$('#guess-button').prop('disabled', true);
$('#vowel-button').prop('disabled', true);
$('#solve-button').prop('disabled', true);
$('#wheel-button').prop('disabled', true);

$('.start-button').on('click', function(e) {
  e.preventDefault();
  game.startGame(game);
  $('#wheel-button').prop('disabled', false);
})

$('#guess-button').on('click', function(e) {
  e.preventDefault();
  game.puzzles[0].checkGuess(game);
  $('#guess-button').prop('disabled', true);
  $('#vowel-button').prop('disabled', false);
  $('#solve-button').prop('disabled', false);
  domUpdates.clearInput();
})

$('#vowel-button').on('click', function(e) {
  e.preventDefault();
  game.puzzles[0].checkVowel(game);
  domUpdates.clearInput();
})

$('#solve-button').on('click', function(e) {
  e.preventDefault();
  game.puzzles[0].checkSolve(game);
  domUpdates.clearInput();
})

$('.wheel').on('click', function(e) {
  e.preventDefault();
  game.wheels[0].spin(game);
  $('#guess-button').prop('disabled', false);
  $('#solve-button').prop('disabled', true);
  $('#vowel-button').prop('disabled', true);
})

$('#new-game').on('click', function() {
  location.reload();
})


