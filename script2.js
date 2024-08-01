let todoContainer=document.querySelector("#todo");

let addTaskBtn=document.querySelector("#addTask");

let count=1;

addTaskBtn.addEventListener("click",()=>{
    let superDiv=document.createElement("div");
    superDiv.style.backgroundColor="lightblue";
    let card=document.createElement("div");
    card.setAttribute("class","card");
    card.innerText="New Task";
    card.setAttribute("contenteditable",true);
    //todoContainer.append(card);
    superDiv.append(card);

    
    card.addEventListener("click",(e)=>{
        console.log(card.innerText);
        if(card.innerText=="New Task")
        {
            card.innerText="";
        }
    })//closure() function

    card.addEventListener("blur",(e)=>{
        let targetCard=e.target;
        let targetParentCard=targetCard.parentElement;//superdiv
        if(card.innerText.trim()=="")
        {
            //targetCard.remove();
            //targetParentCard.remove();
            superDiv.remove();
        }
    })

    //create dropdown:
    let dropdown=document.createElement('select');

    dropdown.innerHTML=`
        <option value="todo"> TODO </option>
        <option value="inprogress"> IN PROGRESS </option>
        <option value="done"> DONE </option>

    `

    // let array1=["TODO","IN PROGRESS","DONE"];
    // let array2=["todo","inprogress","done"];

    // for (let i = 0; i < array1.length; i++) {
    //     let option=document.createElement('option');
    //     option.value=array2[i];
    //     option.innerText=array1[i];
    //     dropdown.append(option);
    // }

    //card.append(dropdown);
    superDiv.append(dropdown);

    //event=>change

    dropdown.addEventListener("change",(e)=>{
        let targetCardValue=e.target.value;//id of the column in which u want to move
        let selectedColumn=document.getElementById(targetCardValue);
        selectedColumn.append(superDiv);
    })

    todoContainer.append(superDiv);

})
//push => append() (at last in the element)
//unshift => prepend() (at start in the element)