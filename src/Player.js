import domUpdates from './domUpdates.js';

class Player {
  constructor(name, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }

  updateScore(game, elementValue) {
    let newScore = game.players[game.currentPlayer].roundScore += elementValue;
    domUpdates.displayScore(game, newScore);
  } 

  removeMoney(game, currentScore) {
    game.players[game.currentPlayer].roundScore = 0;
    domUpdates.displayScore(game, 0);
  }
}

export default Player;

