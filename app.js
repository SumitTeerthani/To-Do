






function addTask() {
    var taskInput = document.getElementById("taskInput");
    var todoList = document.getElementById("todoList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
      var listItem = document.createElement("li");
      var taskTextNode = document.createTextNode(taskText);
      listItem.appendChild(taskTextNode);

      var deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("Task done"));
      deleteButton.classList.add("deleteButton");
      deleteButton.onclick = function () {
        // Remove the parent li when the delete button is clicked
        todoList.removeChild(listItem);
      };

      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);

      taskInput.value = "";
    }
  }



  //npx tailwindcss -i ./styles.css -o ./src/output.css --watch