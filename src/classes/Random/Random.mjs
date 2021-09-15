import { Strategy } from "../index.mjs";

// Randpm algorithm.
export class Random extends Strategy {
  constructor(bandits) {
    super(bandits);
    this.name = "Random";
  }

  // This algorithm always selects a random bandit.
  selectBandit() {
    this.attemptBandit(Math.floor(Math.random() * this.history.length));
  }
}
