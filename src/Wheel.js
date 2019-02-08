import domUpdates from './domUpdates.js';

class Wheel {
  constructor(wheelObj) {
    this.wheel = wheelObj;
    this.currentValue = undefined;
  }

  spin(game) {
    this.currentValue = this.wheel[Math.floor(Math.random() * this.wheel.length)];
    if (this.currentValue === 'BANKRUPT') {
      game.players[game.currentPlayer].removeMoney(game);
      domUpdates.displayBankrupt();
      game.updatePlayerTurn(this);
      return;
    }
    if (this.currentValue === 'LOSE A TURN') {
      domUpdates.displayLoseTurn();
      game.updatePlayerTurn(this);
      return;
    } else {
      domUpdates.valueMessage(game, this.currentValue);
    }
  }
}

export default Wheel; 