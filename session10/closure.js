function outer() {
    let outerVar = 10;
  
    function inner() {
        outerVar += 1;
      console.log(outerVar); // inner function can access outerVar
    }
  
    return inner;
  }
  
const result = outer();
result();
result();
result();