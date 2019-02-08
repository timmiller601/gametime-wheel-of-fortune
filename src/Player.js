import domUpdates from './domUpdates.js';

class Player {
  constructor(name, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }

  updateScore(game, elementValue) {
    this.roundScore += elementValue;
    domUpdates.displayScore(game, this.roundScore);  
  } 

  removeMoney(game) {
    this.roundScore = 0;
    domUpdates.displayScore(game, this.roundScore);
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

