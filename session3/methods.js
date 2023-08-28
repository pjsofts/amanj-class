const numbers = [ 2000, 20, 30, 40, 1000 ];

// numbers.forEach((item)=>{
//     console.log(item);
// });

// const numbers2 = numbers.map((item)=>{
//     return item * 2;
// })
// console.log(numbers2);


numbers.sort((a,b)=>{
    if (a>b){
        return -1;
    } else if(a < b){
        return 1;
    } else {
        return 0;
    }
});
console.log(numbers);