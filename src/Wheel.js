import domUpdates from './domUpdates.js';

class Wheel {
  constructor(wheelObj) {
    this.wheel = wheelObj;
    this.currentValue = undefined;
  }

  spin(game) {
    const spinValue = this.wheel[Math.floor(Math.random() * this.wheel.length)];
    domUpdates.valueMessage(game, spinValue);
    this.currentValue = spinValue;
    if (spinValue === 'BANKRUPT') {
      game.players[0].removeMoney(game);
      game.updatePlayerTurn();
    }
    if (spinValue === 'LOSE A TURN') {
      game.updatePlayerTurn();

    }
    return spinValue;
  }
}

export default Wheel; 