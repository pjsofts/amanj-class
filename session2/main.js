console.log("main connected");
function addItem(){
    const newValue = document.getElementById("input-text").value;
    console.log("new value:", newValue);
    const li = document.createElement("li");
    li.textContent = newValue;
    document.getElementById("list").appendChild(li);    

}

function removeItem(){
    const list = document.getElementById("list");
    list.removeChild(list.lastChild);
}

function remove(){
    const removeValue = document.getElementById("input-text").value;
    const list = document.getElementById("list");
    
    for (let li of list.children){
        if (li.textContent === removeValue){
            list.removeChild(li)    
        }
    }

}