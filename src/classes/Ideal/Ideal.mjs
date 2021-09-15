import { Strategy } from "../index.mjs";

// Ideal algorithm.
export class Ideal extends Strategy {
  constructor(bandits) {
    super(bandits);
    this.name = "Ideal";

    // Cheat by looking up the best bandit.
    let bestIndex = 0;
    bandits.forEach((bandit, banditIndex) => {
      if (bandit.rewardThreshold < bandits[bestIndex].rewardThreshold) {
        bestIndex = banditIndex;
      }
    });

    this.ideal = bestIndex;
  }

  // Always selects the best bandit.
  selectBandit() {
    this.attemptBandit(this.ideal);
  }
}
