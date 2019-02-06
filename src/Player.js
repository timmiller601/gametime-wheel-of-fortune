import domUpdates from './domUpdates.js';
import Puzzle from './Puzzle.js'

class Player {
  constructor(name, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }

  // updateRoundScore(passValue) {
  //   console.log("update round score fired");
  //   domUpdates.displayScore(passValue);
  // }
  
  // scoreTracker() {

  // }
}

export default Player;

