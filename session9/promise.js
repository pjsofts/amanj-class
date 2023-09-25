const fs = require('fs/promises');

const studentFile = fs.readFile("student.txt");


studentFile.then((data)=>{
    console.log("read file", data.toString())
    const studentFile2 = fs.readFile("student2.txt");
    return studentFile2;
}).then((data)=>{
    console.log("file2 read", data.toString())
}).catch(err=>{
    console.log("some err", err.message);
})
