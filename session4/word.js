const sentence = "Salam Hi Khoobi Hello Chetori Hi";
const words = sentence.split(" ");
const wordsCount = {};

for (word of words){
    if (!wordsCount[word]){
        wordsCount[word] = 1;
    } else {
        wordsCount[word] += 1;
    }
}

console.log(wordsCount);