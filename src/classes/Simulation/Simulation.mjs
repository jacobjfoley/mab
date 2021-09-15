import { Bandit, Naieve, Random, Ideal, EpsilonGreedy } from "../index.mjs";

// Main simulation loop.
export class Simulation {
  constructor(bandits = 10, rounds = 1000) {
    this.rounds = rounds;

    // Create bandits.
    this.bandits = [];
    for (let i = 0; i < bandits; i++) {
      this.bandits.push(new Bandit());
    }

    // Create strategies.
    this.strategies = [
      new Ideal(this.bandits),
      new EpsilonGreedy(this.bandits, 0.1),
      new EpsilonGreedy(this.bandits, 0.2),
      new EpsilonGreedy(this.bandits, 0.3),
      new EpsilonGreedy(this.bandits, 0.5),
      new Random(this.bandits),
      new Naieve(this.bandits),
    ];
  }

  // Run each strategy for the specified number of rounds.
  runSimulation() {
    this.strategies.forEach((strategy) => {
      for (let i = 0; i < this.rounds; i++) {
        strategy.selectBandit();
      }
    });
  }

  // Display a summary of results.
  printSummary() {
    console.log(`Results (${this.rounds} rounds):`);
    this.strategies.forEach((strategy) => {
      console.log(`  ${strategy.name}: ${strategy.getSummary()}`);
    });
  }
}
