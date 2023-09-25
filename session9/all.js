const fs = require("fs/promises");

const promise1 = fs.readFile("student.txt");
const promise2 = fs.readFile("student2.txt");

Promise.all([promise1, promise2]).then(result=>{
    result.forEach(data=>{
        console.log(data.toString())
    })
})
console.log("here")