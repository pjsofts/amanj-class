if (true) {
    var blockVar = "I'm a block-scoped var.";
    let blockLet = "I'm a block-scoped let.";
}

function hello(){
    if (true) {
        var helloVar = "hello var";
        let helloLet = "I'm a block-scoped let.";
    }
    console.log(helloLet);
}

console.log(helloVar);

// console.log(blockVar); // Output: I'm a block-scoped var.
// console.log(blockLet); // Error: blockLet is not defined

hello();