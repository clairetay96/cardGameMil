## Card Game

The players each draw a card from the deck (containing 2 standard decks of cards, 104 cards total) each round.
The player who draws the highest card will win the round and score a point. The card ranking follows the following ranking:

     smallest - largest value: ace, two... nine, jack, queen, king
     smallest - largest suit: clubs, diamonds, hearts, spades

The game ends when there are fewer cards left in the deck than players at the start of a round.

### How to run this game

Requires node version ^20 to run.

To play this game, run the following command in this directory:

`node cardGame`

To note:

1. The number of players entered must be an integer between 2 and 100 inclusive.
2. The player input for the prompt "Does player x want to draw a card?" must be y or Y for Yes, n or N for No. Any invalid input will result in a skipped turn.
