function greet(callback){
    console.log("inside greet");
    callback();
}

function hello(){
    console.log("Hello")
}

function bye(){
    console.log("bye")
}


greet(bye);