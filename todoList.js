function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText !== ""){
        const ul = document.getElementById("todoList");

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        //create edit button
        const editButton = document.createElement("Button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(span);

        //create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.onclick = () => removeTak(li);

        //append buttons and text to the list item
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        //append list items to the list
        ul.appendChild(li);

        //clear the input field
        input.value = "";
    }
    else {
        alert("Please enter a valid task!");
    }
}
function editTask(span){
    //prompt the user to enter a new task description
    const newTask = prompt("Edit your task: ", span.textContent);

    if (newTask !== null && newTask.trim() !== ""){
        span.textContent = newTask.trim(); 
    }
}
function removeTak(task){
    //get the list of container
    const ul = document.getElementById('todoList')
    ul.removeChild(task); //remove specified task
}