    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var taskList = document.getElementById("taskList");

        if (taskInput.value.trim() !== "") {
            var task = document.createElement("div");
            task.className = "task";
            task.innerHTML = taskInput.value + '<span class="delete" onclick="deleteTask(this)">X</span> <span class="edit" onclick="editTask(this)">✎</span>';
            taskList.appendChild(task);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    function deleteTask(element) {
        element.parentElement.remove();
    }

    function editTask(element) {
        var newText = prompt("Edit task:", element.parentElement.firstChild.textContent);
        if (newText !== null) {
            element.parentElement.firstChild.textContent = newText;
        }
    }
