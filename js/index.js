let addTask = document.getElementById('addTask');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');

function updateTaskList(){
    const newTask = document.createElement("li");
    newTask.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.textContent = addTask.value;

    const deleteTask = document.createElement("button");
    deleteTask.classList.add('delete-btn','btn', 'btn-sm')
    deleteTask.textContent = "DELETE";

    if(addTask.value == ""){
        alert("No tasks added!")
    }else{
        newTask.appendChild(taskText);
        newTask.appendChild(deleteTask);
        taskList.appendChild(newTask);
        addTask.value = "";
    }


deleteTask.addEventListener('click', ()=>{
    newTask.remove();
})

newTask.addEventListener('click', ()=>{
    taskText.classList.toggle('taskText')
})

}

addTaskBtn.addEventListener('click', updateTaskList)