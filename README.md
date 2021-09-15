# Multi-Armed Bandit

A multi-armed bandit simulator in Node.js.

## Usage

`npm start` to run the simulation.

## Overview

Each "bandit" represents a process with an uncertain outcome, like a one-armed bandit in a casino. Some bandits give higher rewards than others: a "lucky" machine. In this repository we implement a variety of different strategies that explore different bandits and then exploit the one they have detected to yield the highest reward to compare approaches.

In the real world, multi-armed bandits can be used for things like multivariate tests (a/b tests, but with potentially more variants). If one variant yields a significantly better outcome than others, we don't want an even split over the course of the experiment as we would get a better overall result by sending more samples to the superior variant.

In concrete terms, imagine we have a new checkout that doubles a creator's sales. If we detect that the checkout really does work, we want to send as many people to this variant as we can while still performing a statistically significant experiment.

## Strategies

### Naieve

This strategy simply picks the first bandit every time.

### Random

This strategy picks a random bandit every time.

### Ideal

This strategy picks the best bandit every time (by cheating).

### EpsilonGreedy

Some of the time, select a random bandit. Other times, select the best recorded bandit. The variable "epsilon" controls how frequently we explore versus exploit.
