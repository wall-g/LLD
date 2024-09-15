class Dice {
    numberOfDice: number;
    constructor(numberOfDice: number) {
        this.numberOfDice = numberOfDice;
    }   
    roll() {
        const min = this.numberOfDice;
        const max = 6*this.numberOfDice;
        return Math.random()*(max-min)+min;
    }
}

export default Dice;