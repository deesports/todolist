const typeText = document.getElementById("typeText");
const todolist = document.getElementById("todolist");

function addBtn(){
    if(typeText.value === ''){
        alert("Enter Your To Do Task")
    }
    else{
        let li = document.createElement("li");
        li.innerText = typeText.value;
        todolist.appendChild(li);
        let span = document.createElement("span")
        span.innerText = "\u00d7";
        li.appendChild(span)
        
    }
    typeText.value = '';
    saveData()
}

// todolist.addEventListener("click", function(e){
//          if(e.target.className === "" ){
//             e.target.classList.toggle("checked");
//          }
//          else if ( e.target.localName === "span"){
//              e.target.parentElement.remove();
//          }

//         //  console.log(e)
// },false)
todolist.addEventListener("click", function(e){
    if(e.target.tagName === "LI" ){
       e.target.classList.toggle("checked");
       saveData()
    }
    else if ( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

   //  console.log(e)
},false)


function saveData(){
    localStorage.setItem("data",todolist.innerHTML)
}
function showData(){
    todolist.innerHTML = localStorage.getitem("data")
}
showData();