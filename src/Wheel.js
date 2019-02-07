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
    return spinValue;
  }
//if this.currentValue === Bankrupt --> game.removeMoney() {
  //that will change player's $ 
  //call existing change turns method.
//if this.currentValue === Lose a turn --> game.changeTurns;

}

export default Wheel; 