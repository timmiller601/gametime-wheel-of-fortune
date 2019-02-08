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
    let answer = game.puzzles[game.currentRound].answer.split('');
    answer.forEach(letter => {
      if (letter === " " || letter === "-" || letter === "&") {
        $('.puzzle').append(`<p class="puzzle-letter no-border">${letter.toUpperCase()}</p>`);
      } else {
        $('.puzzle').append(`<p class="puzzle-letter hide">${letter.toUpperCase()}</p>`);
      }
    });
    let category = game.puzzles[game.currentRound].category;
    $('.category').text(category); 
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
    if(currentScore === 'BANKRUPT' || currentScore === 'LOSE A TURN') {
      return;
    } else {
    $(`#${game.currentPlayer} .round-score span`).text(currentScore);
    }
  },

  displayTotal(game, resetTotal) {
    $(`#${game.currentPlayer} .game-score span`).text(resetTotal);
  },

  resetRound() {
    $('.round-score span').text('0');
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

  winnerMessage() {
    $('.pop-up-message').text('WINNER WINNER CHICKEN DINNER!!!!')
  },

  alreadyGuessedMessage() {
    $('.pop-up-message').text('That letter has already been guessed. Try again.')
  },

  disableGuess() {
    $('#guess-button').prop('disabled', true);
  },

  clearBoard(game) {
    $('.puzzle').empty();
    $('.pop-up-message').text('Welcome to the next round!');
    $('.round span').text(`${game.currentRound + 1}`)
  }
}





