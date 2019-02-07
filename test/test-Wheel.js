import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
import Wheel from '../src/Wheel.js';
import data from '../src/data.js';
import Game from '../src/Game.js';


describe('Wheel', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  })
  // properties of Wheel
  it('should have properties', function() {
    let wheels = [600, 650, 700, 1000, 1900,240];
    game.createWheels(wheels);
    expect(game.wheels[0]).to.have.property('wheel');
    expect(game.wheels[0]).to.have.property('currentValue');
  })
  // Spin 
  it('should return a value of the wheel', function() {
    let wheel = new Wheel();
    let wheels = [600, 650, 700, 1000, 1900,240];
    wheel.spin(game)
    const spinValue = 650;
    expect(wheel.currentValue).to.have.length(1);
  })

 

});