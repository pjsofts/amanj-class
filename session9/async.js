const fs = require("fs/promises");

async function read(){
    try{
        const data1 = await fs.readFile("student.txt");
        const data2 = await fs.readFile("student2.txt");
        console.log(data1.toString());
        console.log(data2.toString());
    } catch(error){
        console.log("some error happend", error.message)
    }
}


read();

