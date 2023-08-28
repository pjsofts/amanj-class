class Car{
    constructor(color){
        this.color = color
    }

    printColor (){
        console.log("color is", this.color);
    }
}

const car1 = new Car("red");
const car2 = new Car("blue");

car2.printColor()