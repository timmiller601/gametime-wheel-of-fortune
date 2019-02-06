import domUpdates from './domUpdates.js';

class Wheel {
  constructor(wheelObj) {
    this.wheel = wheelObj;
    this.currentValue = undefined;
  }

  spin() {
    const spinValue = this.wheel[Math.floor(Math.random() * this.wheel.length)];
    domUpdates.valueMessage(spinValue);
    this.currentValue = spinValue;
    return spinValue;
  }


}

export default Wheel; 