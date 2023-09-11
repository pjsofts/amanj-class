fetch("https://api.todoist.com/rest/v2/tasks", {
    headers:{"Authorization": "Bearer 0512fc523d1a84f13d06ef40bb8210d7466796230"}
}).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error", error);
})