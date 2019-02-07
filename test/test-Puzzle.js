import Puzzle from '../src/Puzzle.js';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, ['changeLetter', 'correctMessage'], () => true);

describe('Puzzle', function() {
let game; 

  beforeEach(function () {
    game = new Game();
  })

  it('should have properties of category, numberWords, totalLetters, firstWord, description, answer', function() {
    let puzzles = game.findPuzzles()
    game.createPuzzles(puzzles);
    expect(game.puzzles[0].category).to.be.a('string');
    expect(game.puzzles[0].numberWords).to.be.a('number');
    expect(game.puzzles[0].totalLetters).to.be.a('number');
    expect(game.puzzles[0].firstWord).to.be.a('number');
    expect(game.puzzles[0].description).to.be.a('string');
    expect(game.puzzles[0].answer).to.be.a('string');
  })

  // checkGuess 
  it('should check guessed letter vs answer', function() {
    let puzzle = new Puzzle();
    let puzzles = game.findPuzzles()
    game.createPuzzles(puzzles);
    puzzle.checkGuess(game);
    let array = ['t','i','t','a','n','i','c'];
    let letter = 't';

    expect(game.updateScore()).to.have.been.called(1);
  })
})