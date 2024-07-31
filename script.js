let todoContainer=document.querySelector("#todo");

let addTaskBtn=document.querySelector("#addTask");

let count=1;

addTaskBtn.addEventListener("click",()=>{
    let card=document.createElement("div");
    // card.className="card";
    card.setAttribute("class","card");
    card.innerText="New Task";
    //I want my card to be editable
    //card.contentEditable=true;
    card.setAttribute("contenteditable",true);
    todoContainer.append(card);

    //1st thing =>For default text ,empty the card when it is clicked

    card.addEventListener("click",(e)=>{
        let targetCard=e.target;
        //console.log(targetCard);
        if(targetCard.innerText=="New Task")
        {
            targetCard.innerText="";
        }

        //2nd thing => focus,blur

        card.addEventListener("blur",()=>{
            if(targetCard.innerText.trim()=="")
            {
                targetCard.remove();
            }
        })
    })//closure() function

})
//push => append() (at last in the element)
//unshift => prepend() (at start in the element)