import { Strategy } from "../index.mjs";

// Epsilon greedy algorithm.
export class EpsilonGreedy extends Strategy {
  constructor(bandits, epsilon) {
    super(bandits);
    this.name = `EpsilonGreedy(${epsilon})`;
    this.epsilon = epsilon;
  }

  // Retrieve the bandit with the highest observed reward.
  getHighestReward() {
    const averageRewards = this.history.map((bandit) => {
      if (bandit.attempts === 0) return 0;
      return bandit.totalRewards / bandit.attempts;
    });

    let highestIndex = 0;
    averageRewards.forEach((reward, rewardIndex) => {
      if (reward > averageRewards[highestIndex]) {
        highestIndex = rewardIndex;
      }
    });

    return highestIndex;
  }

  // Retrieve a random bandit.
  getRandom() {
    return Math.floor(Math.random() * this.history.length);
  }

  // Select the bandit to interact with.
  selectBandit() {
    if (Math.random() > this.epsilon) {
      this.attemptBandit(this.getHighestReward());
    } else {
      this.attemptBandit(this.getRandom());
    }
  }
}
