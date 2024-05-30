/** Maps card integer to suit and value of card, assuming the order goes as follows:
 * smallest <--- ace of clubs, ace of diamonds, ace of hearts, ace of spades, two of clubs, two of diamonds ... king of hearts, king of spades ---> largest
 * @example integerToSuitValue(0) -> "Ace of Clubs" 
 * @example integerToSuitValue(51) -> "King of Spades"
 * */ 
function integerToSuitValue(cardInteger) {
    suitsInOrder = ["Clubs", "Diamonds", "Hearts", "Spades"]
    valuesInOrder = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
    return `${valuesInOrder[Math.floor(cardInteger/4)]} of ${suitsInOrder[cardInteger%4]}`
}

/** Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


/** 
 * Takes in `numberOfDecks`: integer, and `shuffle`: boolean
 */
class CardDeck {
    constructor(numberOfDecks, shuffle) {
        // Stack the decks
        this.deck = []
        for (let i = 0; i < numberOfDecks; i ++ ) {
            this.deck.push(...Array(52).keys());
        } 
    
        // Shuffle the decks together
        if (shuffle) shuffleArray(this.deck);
    }

    /** Draws a card from the deck, and returns the integer value (ie 0-51) and the printValue (eg "Ace of Spades") of the drawn card */
    drawCard() {
        const drawnIntegerCard = this.deck.pop();
        return { integerValue: drawnIntegerCard, printValue: integerToSuitValue(drawnIntegerCard) }
    }

    getNumberOfCardsInDeck() {
        return this.deck.length;
    }

}

module.exports = { CardDeck }
