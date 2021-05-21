var buttonEl = document.querySelector("#save-task");

var tasksTodoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listenEl.className = "task-item";
    listIteamEl.textContent = "This is a new task.";
    tasksTodoEl.appendChild(listItemEl);
});
