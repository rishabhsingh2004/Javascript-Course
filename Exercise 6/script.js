let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// Load tasks on page load
window.onload = function () {
  showTasks();
};

// Function to show all tasks
function showTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Add task function
function addTask() {
  let task = taskInput.value.trim();
  if (task === "") return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  showTasks();
}

// Delete task function
function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();
}

// Press Enter to Add
taskInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });

    