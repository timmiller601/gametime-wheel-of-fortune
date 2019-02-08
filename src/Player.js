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

  resetTotal(game) {
    let resetTotal = game.players[game.currentPlayer].totalScore += this.roundScore;
    domUpdates.displayTotal(game, resetTotal);
  }

  resetScore(game) {
    game.players[0].roundScore = 0;
    game.players[1].roundScore = 0;
    game.players[2].roundScore = 0;
    domUpdates.resetRound()
  }
}

export default Player;

