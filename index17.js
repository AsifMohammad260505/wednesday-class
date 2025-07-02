function addTask() {
      const input = document.getElementById("task-input");
      const taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;
      span.onclick = function () {
        span.classList.toggle("completed");
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = function () {
        li.remove();
      };

      li.appendChild(span);
      li.appendChild(deleteBtn);

      document.getElementById("task-list").appendChild(li);

      input.value = "";
    }