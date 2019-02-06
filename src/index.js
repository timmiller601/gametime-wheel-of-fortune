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

window.game = new Game();

$('.start-button').on('click', function(e) {
  e.preventDefault();
  game.startGame();
  // game.startRound();
})

$('#guess-button').on('click', function(e) {
  e.preventDefault();
  // grab the number from the wheel
  // $('').text(); assign to variable
  // take variable and parseInt();
  // take assigned variable and pass it into checkGuess(wheelValue);
  game.puzzles[0].checkGuess();
  domUpdates.clearInput();
  // let playerScore = game.players[game.playerTurn].roundScore;
  // domUpdates.appendScore(playerScore); 
})

$('#vowel-button').on('click', function(e) {
  e.preventDefault();
  game.puzzles[0].checkVowel();
  domUpdates.clearInput();
})

$('.wheel').on('click', function(e) {
  e.preventDefault();
  game.wheels[0].spin();
})


