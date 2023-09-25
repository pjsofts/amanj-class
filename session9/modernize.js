const fs = require("fs");

function newReadFile(filename){
    const studentPromise = new Promise((resolve, reject)=>{
        fs.readFile(filename, (err, data)=>{
            if (err){
                reject(err);
                return;
            }
            resolve(data.toString());
        });
    })
    return studentPromise;
}

async function read(){
    try{
        const data1 = await newReadFile("student.txt");
        const data2 = await newReadFile("student2.txt");
        console.log(data1);
        console.log(data2);
    }catch(err){
        console.log(err.message)
    }    
}

read();
