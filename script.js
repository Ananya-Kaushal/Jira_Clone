let todoContainer=document.querySelector("#todo");

let addTaskBtn=document.querySelector("#addTask");

addTaskBtn.addEventListener("click",()=>{
    let card=document.createElement("div");
    card.className="card";
    card.innerText="New Task";
    
    todoContainer.append(card);
})
//push => append() (at last in the element)
//unshift => prepend() (at start in the element)