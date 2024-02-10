const inputBox = document.getElementById("input-box")
const listConatiner = document.getElementById("list-containder")

addTasks = ()=>{
    if (inputBox.value===''){
        alert("you must write somethihng")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listConatiner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

saveData = ()=>{
    localStorage.setItem("data", listConatiner.innerHTML);
}

showData =()=>{
    listConatiner.innerHTML=localStorage.getItem("data");
}
showData();