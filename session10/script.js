const text = document.getElementById("title");
const words = ["Hello", "Im Sarian", "hello", "Fronted developer"];
let wordIndex =0;
let index = 0;
let showCursor = true;
function textload(){
    text.textContent = words[wordIndex].substring(0, index);
    if (index > words[wordIndex].length){
        
        debugger;

        console.log("inside if", index, words[wordIndex]);

        wordIndex +=1;
        if (wordIndex === words.length){
            wordIndex = 0;
        }
        index = 0;
        text.textContent = "";
    }
    index++;
    const timer = setTimeout(textload, 1000)
}
textload();



setInterval(()=>{
    if (showCursor){
        text.style.borderRight = "";
        showCursor = false;
    } else {
        text.style.borderRight = "2px solid black";
        showCursor = true;
    }
}, 300)