let numbers = [2, 25, 110, 29];
let max = numbers[0];

for (let number of numbers){
    if (number > max){
        max = number;
    }
}

console.log(max)