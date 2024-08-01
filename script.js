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
    })//closure() function

    //2nd thing => focus,blur

    card.addEventListener("blur",()=>{
        if(targetCard.innerText.trim()=="")
        {
            targetCard.remove();
        }
    })

    //create dropdown:
    let dropdown=document.createElement('select');

    // dropdown.innerHTML=`
    //     <option value="todo"> TODO </option>
    //     <option value="inprogress"> IN PROGRESS </option>
    //     <option value="done"> DONE </option>

    // `

    let array1=["TODO","IN PROGRESS","DONE"];
    let array2=["todo","inprogress","done"];

    for (let i = 0; i < array1.length; i++) {
        let option=document.createElement('option');
        option.value=array2[i];
        option.innerText=array1[i];
        dropdown.append(option);
    }

    card.append(dropdown);

    //event=>change

    dropdown.addEventListener("change",(e)=>{
        let targetCardValue=e.target.value;//id of the column in which u want to move
        console.log(targetCardValue);
        let selectedColumn=document.getElementById(targetCardValue);
        selectedColumn.append(card);
    })

})
//push => append() (at last in the element)
//unshift => prepend() (at start in the element)