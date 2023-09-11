const url = "https://api.todoist.com/rest/v2/tasks";
const token = "052fc523d1a84f13d06ef40bb8210d7466796230";

async function getTodos(){
    try {
        const response = await fetch(url, {
            headers: {"Authorization": `Bearer ${token}`}
        });
        if (!response.ok){
            throw("some error", response.status);
        }
        const data = await response.json();
        return data;
    } catch(error){
        console.log("some error happend", error);
    }
}

async function loadTodos(){
    const todos = await getTodos();
    const todosList = document.getElementById("todos");
    todosList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.content;
        todosList.appendChild(li);
    });
}

async function createTodo(value){
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            content: value
        })
    });
    console.log(await response.json());
}

async function addTodo(){
    const newTodo = document.getElementById("newTodo");
    
    await createTodo(newTodo.value);
    newTodo.value="";
    loadTodos();
}

loadTodos();

