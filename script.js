let addButtonDOM = document.querySelector("#addButton")
addButtonDOM.addEventListener("click",handler)
 
let ulDOM = document.querySelector("#list")

// Create close button each li's 

let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Adding function to close buttons.
let closeDOM = document.getElementsByClassName("close"); 
for (let item of closeDOM) {
    item.addEventListener('click',removeItem);
}

// Add a "checked" symbol when clicking on a list item
ulDOM.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }},false
);


function handler(){   
    taskDOM = document.querySelector("#task")
    if(task.value.trim()){
        addItem(task.value)
        task.value = ""
        $(".success").toast("show");        
    }
    else{
        $(".error").toast("show");
    }

}


function addItem(text){   
    let liDOM = document.createElement('li')  
    liDOM.innerHTML = `${text}`    
    ulDOM.append(liDOM)

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liDOM.appendChild(span);

    for (let item of closeDOM) {
        item.addEventListener('click',removeItem);
    }
    
}

function removeItem(){
    let div = this.parentElement;
    div.style.display = "none";
}