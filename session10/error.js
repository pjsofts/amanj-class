let a = 10;
let b = 0;

async function getData(){
    try{
        const response = await fetch("somesite");
        const data = await response.json();
        throw Error;
    } catch(error){
         console.log("some error", error.message)
    }
    console.log("after try catch")
}

getData();