const words = ["salam", "hi", "hello", "salam", "salam"];
const words2 = [];
const duplicates = [];

for (let word of words){
    if (!words2.includes(word)){
        words2.push(word)
    } else {
        if (!duplicates.includes(word)){
            duplicates.push(word)
        }
    }
}

console.log(words2)
console.log(duplicates);
