// Base class for various kinds of strategies.
export class Strategy {
  // We give this strategy a name, and store a history of interactions with bandits.
  constructor(bandits) {
    this.name = "Strategy";

    this.history = bandits.map((bandit) => {
      return {
        bandit,
        attempts: 0,
        totalRewards: 0,
      };
    });
  }

  // All strategies need a method to select the bandit to interact with.
  selectBandit() {
    this.attemptBandit(0);
  }

  // This base class provides a method to interact with a bandit and record results.
  attemptBandit(index) {
    const selected = this.history[index];

    if (!selected) throw new Error(`Index ${index} doesn't exist.`);

    selected.attempts += 1;
    selected.totalRewards += selected.bandit.attempt();
  }

  // This base class provides a method to summarise the success of this strategy
  // (the sum of the strategy's rewards).
  getSummary() {
    return this.history.reduce((acc, curr) => {
      return (acc += curr.totalRewards);
    }, 0);
  }
}
