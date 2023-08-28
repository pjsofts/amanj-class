function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Toyota", "Camry", 2023);
let myCar2 = new Car("Peg", "206", 2005);
console.log(myCar.make); // Output: Toyota

Car.prototype.start = function(){
    console.log("engine started");
}

myCar.turnOff = function(){
    console.log("engine off")
}

myCar.start()
myCar2.start()

myCar.turnOff()
myCar2.turnOff()