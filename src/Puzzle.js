import domUpdates from './domUpdates.js';
import Player from './Player.js';
import $ from 'jquery';

class Puzzle {
  constructor(puzzleObj) {
    this.category = puzzleObj.category;
    this.numberWords = puzzleObj.number_of_words;
    this.totalLetters = puzzleObj.total_number_of_letters;
    this.firstWord = puzzleObj.first_word;
    this.description = puzzleObj.description;
    this.answer = puzzleObj.correct_answer;
  }

  checkGuess(game, player) {
    const array = this.answer.toUpperCase().split('');
    let forbiddenVowel = ["A", "E", "I", "O", "U"];
    let forbiddenNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const letter = ($('#guess-input').val().toUpperCase());
    if (forbiddenVowel.includes(letter)) {
      domUpdates.buyVowelMessage();
      return;
    }
    if (forbiddenNum.includes(letter)) {
      domUpdates.notLetterMessage();
      return;
    }
    if (array.includes(letter)) {
      domUpdates.changeLetter(letter);
      domUpdates.correctMessage();
      let passValue =  game.wheels[0].currentValue;
      game.players[0].updateScore(game, passValue);
    } else {
      domUpdates.wrongLetter(letter);
      game.updatePlayerTurn();
      domUpdates.wrongMessage();
    }
  }
  
  checkVowel(game) {
    const puzzleAnswer = this.answer.toUpperCase().split('');
    const vowel = ($('#vowel-input').val().toUpperCase());
    if (game.players[game.currentPlayer].roundScore < 100) {
      domUpdates.tooPoorMessage();
      return; 
    }
    if (puzzleAnswer.includes(vowel)) {
      let minus100 = -100;
      game.players[0].updateScore(game, minus100);
      domUpdates.changeLetter(vowel);
    } else {
      let minus100 = -100;
      game.players[0].updateScore(game, minus100);
      domUpdates.wrongLetter(vowel);
      game.updatePlayerTurn();
      domUpdates.wrongMessage();
    }
  }

  checkSolve(game) {
    const puzzleAnswer = this.answer.toUpperCase();
    const solveAttempt = $('#solve-input').val().toUpperCase();
    if (solveAttempt === puzzleAnswer) {
      domUpdates.winnerMessage();
    } else {
      domUpdates.wrongMessage();
      game.updatePlayerTurn()
    }
  }
}

export default Puzzle;
