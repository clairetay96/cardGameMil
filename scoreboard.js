/** Generates a scoreboard with noOfPlayers labelled 1, 2... noOfPlayers, where all players begin with 0 points */
class ScoreBoard {
    constructor(noOfPlayers) {
        // The generated scoreboard will look like [[1,0], [2,0], [3,0]...[noOfPlayers, 0]]
        this.scoreBoard = []
        for (let i = 0; i < noOfPlayers; i ++ ) {
            this.scoreBoard.push([i+1, 0])
        }
    }

    /** Adds the given value to the playerNumber's score */
    addScoreForPlayer(playerNumber, additionalValue) {
        const playerNumberIndex = this.scoreBoard.findIndex(([playerNo]) => playerNo === playerNumber)
        this.scoreBoard[playerNumberIndex][1] += additionalValue
    }

    /** Returns an array of the playerNumbers of the leading players */
    getWinnersPlayerNos() {
        if (this.scoreBoard.length === 0) {
            return -1;
        }
    
        let maxScore = this.scoreBoard[0][1];
        let leadingPlayerNumbers = [this.scoreBoard[0][0]];
    
        for (let i = 1; i < this.scoreBoard.length; i++) {
            const playerNumberInRowI = this.scoreBoard[i][0];
            const playerScoreInRowI = this.scoreBoard[i][1];
            if (playerScoreInRowI >= maxScore) {
                if (playerScoreInRowI > maxScore) {
                    // Empty the array
                    leadingPlayerNumbers.length = 0;
                } 
                leadingPlayerNumbers.push(playerNumberInRowI);
                maxScore = playerScoreInRowI 
            } 
        }
    
        return leadingPlayerNumbers;
    }

    /** Sorts the input scoreboard by the second column (numberOfPointsScored) in-place and prints it in the console */
    sortAndPrint() {
        this.scoreBoard.sort((a,b) => {
            if (a[1] > b[1]) {
                return -1
            }
            if (a[1] < b[1]) {
                return 1
            }
            return 0
        })
        
        const scoreBoardEntries = []
        this.scoreBoard.forEach(([playerNo, playerScore]) => {
            scoreBoardEntries.push({ player: playerNo, numberOfRoundsWon: playerScore })
        })
    
        console.table(scoreBoardEntries)
    }
}

module.exports = { ScoreBoard }