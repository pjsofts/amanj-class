const outer = () => {
    const localVar = "I'm from outer.";
    
    const inner = () => {
        console.log(localVar); // Output: I'm from outer.        
    };
    
    return inner;
};

const innerFunction = outer();
innerFunction();