import { Strategy } from "../index.mjs";

// Naieve algorithm.
export class Naieve extends Strategy {
  constructor(bandits) {
    super(bandits);
    this.name = "Naieve";
  }

  // This algorithm always selects the first bandit.
  selectBandit() {
    this.attemptBandit(0);
  }
}
