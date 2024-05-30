const readline = require('node:readline/promises');

const { CardDeck } = require('./deck')
const { ScoreBoard } = require('./scoreboard')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function runGame () {
    let noOfPlayers = Number(await rl.question('How many players are playing?: '));

    while (isNaN(noOfPlayers) || !Number.isInteger(noOfPlayers) || noOfPlayers < 2 || noOfPlayers > 100) {
        console.log('Input must be valid integer between 2 and 100 inclusive. Please try again.')
        noOfPlayers = Number(await rl.question('How many players are playing?: '));
    }

    const cardDeck = new CardDeck(2, true);
    const gameScoreBoard = new ScoreBoard(noOfPlayers);
    let roundNumber = 1
    
    while (cardDeck.getNumberOfCardsInDeck() >= noOfPlayers) {  
        const roundScoreBoard = new ScoreBoard(noOfPlayers)
        for (let playerNo = 1; playerNo <= noOfPlayers; playerNo++) {
            const playerDrawsCard = await rl.question(`Does player ${playerNo} want to draw a card? (Y/N): `);

            if (playerDrawsCard.toUpperCase() === 'N') {
                console.log(`Player ${playerNo} has skipped their turn!`);
                continue;
            } else if (playerDrawsCard.toUpperCase() === 'Y') {
                const playerDraw = cardDeck.drawCard()
                console.log(`Player ${playerNo} has drawn ${playerDraw.printValue}`);
                roundScoreBoard.addScoreForPlayer(playerNo, playerDraw.integerValue)
            } else {
                console.log(`Invalid input! Skipping Player ${playerNo}'s turn...`);
                continue;
            }
        }

        const roundWinners = roundScoreBoard.getWinnersPlayerNos()
        roundWinners.forEach((roundWinner) => {
            gameScoreBoard.addScoreForPlayer(roundWinner, 1)
        }) 

        console.log(`Player(s) ${roundWinners} has won round ${roundNumber} \n`)
        roundNumber += 1
    }

    gameScoreBoard.sortAndPrint()
    console.log(`Player(s) ${gameScoreBoard.getWinnersPlayerNos()} won the game`)
}


(async () => {
    try {
        await runGame();
    } catch (err) {
        console.log(err);
    } 
    rl.close();
})()

