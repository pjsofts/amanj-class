let numbers = [2, 25, 110, 29];
let max = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i]
    }
}
console.log(max)