const students = {
    Sara: 20,
    Mohammad: 18,
    Ali: 20
}

let sum = 0;
for (let value of Object.values(students)){
    sum += value;
}

console.log(sum);
