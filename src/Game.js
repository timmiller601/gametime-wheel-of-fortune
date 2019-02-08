import domUpdates from './domUpdates.js';
import data from './data.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';


class Game {
  constructor() {
    this.puzzles = [];
    this.wheels = [];
    this.players = [];
    this.currentPlayer = -1;
    this.currentRound = 0;

  }

  startGame(game) {
    // this.updateRound();
    domUpdates.hideStartScreen();
    let names = domUpdates.getNames();
    let puzzles = this.findPuzzles();
    let wheels = this.collectWheels();
    domUpdates.displayNames(names);
    this.createPlayers(names);
    this.createPuzzles(puzzles);
    this.createWheels(wheels);
    domUpdates.changePuzzle(game);
    this.updatePlayerTurn();
    console.log(game);
  }

  createPlayers(names) {
    let player1 = new Player(names[0]);
    let player2 = new Player(names[1]);
    let player3 = new Player(names[2]);
    this.players.push(player1);
    this.players.push(player2);
    this.players.push(player3);
  }

  createPuzzles(puzzles) {
    let puzzle1 = new Puzzle(puzzles[0]);
    let puzzle2 = new Puzzle(puzzles[1]);
    let puzzle3 = new Puzzle(puzzles[2]);
    let puzzle4 = new Puzzle(puzzles[3]);
    this.puzzles = [puzzle1, puzzle2, puzzle3, puzzle4];
  }

  createWheels(wheels) {
    let wheel1 = new Wheel(wheels[0]);
    let wheel2 = new Wheel(wheels[1]);
    let wheel3 = new Wheel(wheels[2]);
    let wheel4 = new Wheel(wheels[3]);
    this.wheels = [wheel1, wheel2, wheel3, wheel4];
  }

  findPuzzles() {
    const puzzleKeys = Object.keys(data.puzzles);
    const foundPuzzles = [];
    puzzleKeys.forEach(key => {
      const length = data.puzzles[key].puzzle_bank.length;
      const randomIndexNumber = Math.floor(Math.random() * Math.floor(length));
      const randomPuzzle = data.puzzles[key].puzzle_bank[randomIndexNumber];
      foundPuzzles.push(randomPuzzle);
    });
    return foundPuzzles;
  }

  collectWheels() {
    const allWheels = [];
    for (var i = 0; i < 4; i++) {
      allWheels.push(this.findWheels());
    }
    return allWheels;
  }

  findWheels() {
    const wheelLength = data.wheel.length;
    const randomIndices = [];
    for (var i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * Math.floor(wheelLength));
      randomIndices.push(randomIndex);
    }
    const randomWheel = [];
    randomIndices.forEach(index => {
      const randomWheelResult = data.wheel[index];
      randomWheel.push(randomWheelResult);
    })
    return randomWheel;
  }

  updatePlayerTurn() {
    if (this.currentPlayer > 1) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer++;
    }
    domUpdates.changePlayer(this.currentPlayer);
  }
  // when solve puzzle returns true: update total score --> see which player has the highest score, they get to keep their score; everyone's round score resets to 0.
  //Need some sort of button or prompt to initiate next round.
  //The round on the dom top left changes to new round.
  updateRound(game) {
    if (this.currentRound >= 3) {
      alert('GAME OVER');
    } else {
      this.currentRound++;
      console.log(game);
      // domUpdates.changePuzzle(game);
      domUpdates.clearBoard(game);
      domUpdates.changePuzzle(game);
      console.log(this.currentRound);
    }
  }

}
export default Game; 