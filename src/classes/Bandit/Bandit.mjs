// A multi-armed bandit.
export class Bandit {
  constructor() {
    this.rewardThreshold = Math.random();
  }

  // Attempt to gain a reward from this bandit.
  attempt() {
    return Math.random() > this.rewardThreshold;
  }
}
