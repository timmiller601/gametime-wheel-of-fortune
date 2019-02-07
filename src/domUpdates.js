// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// import Game from './Game.js';
// import Player from './Player.js';
// import Wheel from './Wheel.js';
// import Puzzle from './Puzzle.js';
import $ from 'jquery';


export default {
  getNames() {
    let $players = [$('#player1').val(),
      $('#player2').val(), $('#player3').val()];
    return $players;
  },

  displayNames(players) {
    $('#player1-name').text(players[0]);
    $('#player2-name').text(players[1]);
    $('#player3-name').text(players[2]);
  },

  changePuzzle(game) {
    let answer = game.puzzles[0].answer.split('');
    answer.forEach(letter => {
      if (letter === " " || letter === "-" || letter === "&") {
        $('.puzzle').append(`<p class="puzzle-letter no-border">${letter.toUpperCase()}</p>`);
      } else {
        $('.puzzle').append(`<p class="puzzle-letter hide">${letter.toUpperCase()}</p>`);
      }
    });
    let category = game.puzzles[0].category;
    $('.category').text(category); 
    console.log(game.puzzles[0].answer);
  },

  clearInput() {
    $(':input').val("");
  },

  changeLetter(letter) {
    $('.puzzle-letter:contains("' + letter + '")').removeClass('hide');
  },

  buyVowelMessage() {
    $('.pop-up-message').text('Sorry, a vowel costs $100. You can buy one below.')
  },

  notLetterMessage() {
    $('.pop-up-message').text('That\'s not a letter')
  },

  wrongLetter(letter) {
    $('.pop-up-letters').append(`<p class="wrong-letter">${letter.toUpperCase()}</p>`);
  },

  wrongMessage() {
    $('.pop-up-message').text('Incorrect Guess. Next Player it is your turn');
  },

  correctMessage() {
    $('.pop-up-message').text('That\'s correct! It\'s still your turn. Spin the wheel, buy a vowel if you can afford it, or solve the puzzle')
  },

  tooPoorMessage() {
    $('.pop-up-message').text('A vowel costs $100 and you can\'t afford one right now.');
  },

  displayScore(game, currentScore) {
    $(`#${game.currentPlayer} .round-score span`).text(currentScore);
  },

  valueMessage(game, currentElement) {
    if (currentElement === 'BANKRUPT') {
      $('.pop-up-message').text(`You just lost All The Money`);
    } 
    if (currentElement === 'LOSE A TURN') {
      $('.pop-up-message').text(`Wow you suck - lost your turn.`);
          } else {
      $('.pop-up-message').text( `This spin is worth ${currentElement}`)
    }
  },

  hideStartScreen() {
    $('.landing-page').hide();
    $('header').removeClass('hidden');
    $('main').removeClass('hidden');
  },


  changePlayer(playerIndex) {
    $('.player').removeClass('current-player');
    $(`#${playerIndex}`).addClass('current-player');
  },

}





