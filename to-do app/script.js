let app = document.createElement("div");
app.style.width = "350px";
app.style.backgroundColor = "#22252d";
app.style.padding = "20px";
app.style.margin = "50px auto";
app.style.borderRadius = "10px";

let title = document.createElement("h2");
title.innerText = "My To-Do List";
title.style.color = "#d30101"
app.appendChild(title);

let input = document.createElement("input");
input.type = "text";
input.placeholder = "Add a new task...";
input.style.width = "100%";
input.style.padding = "10px";
input.style.margin = "10px 0";
input.style.borderRadius = "5px";
app.appendChild(input);

let button = document.createElement("button");
button.innerText="Add Task";
button.style.backgroundColor = "#3325c8";
button.style.color = "#ffffff";
button.style.padding = "10px";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
app.appendChild(button);

let list = document.createElement("ul");
list.style.listStyle = "none";
list.style.padding = "0";
list.style.marginTop = "20px";
app.appendChild(list);

button.addEventListener("click", function() {
    if (input.value === "") return;
    let listItem = document.createElement("li");
    listItem.innerText = input.value;
    listItem.style.padding = "8px";
    listItem.style.marginTop = "8px";
    listItem.style.backgroundColor = "#047232";
    listItem.style.color = "#ffffff";
    listItem.style.borderRadius = "5px";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "#c92c1a";
    deleteBtn.style.color = "#dec7c7";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "3px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", function() {
        list.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
    input.value = "";
     
});

document.body.appendChild(app);






