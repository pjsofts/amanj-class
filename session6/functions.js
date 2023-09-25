function sayHello(name, lastname){
    console.log("Salam", name, lastname?lastname: "");
}

function add(a, b){
    const c = a + b;
    return [10, 20 , 30, c];
}

const multiply = (a, b)=>{
    return a * b;
}


console.log(multiply(10, 20))