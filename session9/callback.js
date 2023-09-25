const fs = require("fs");

console.log("1");

fs.readFile("student.txt", (err, data)=>{
    console.log("3");
    if (err){
        console.log("some error happened", err.message);
        return;
    }
    console.log("reading succesful");
    console.log(data.toString('utf-8'));
    fs.readFile("student2.txt", (err, data)=>{
        if (err){
            console.log("some error happend", err.message);
        }
        console.log("file 2", data.toString('utf-8'));
    })
});

console.log("2");