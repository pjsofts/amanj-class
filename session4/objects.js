const person = {
    name: "ali",
    lastName: "mohammadi",
    score: 20,
    printScore: function printScore(){
        console.log("Salam", this.score);
    },
    addScore: function addScore(){
        this.score += 1;
    }
}

// person.printScore();
person.addScore();
person.printScore();