import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(["To-do List App", "Nyumbani"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTask("");
  }

  return (
    <div>
      <h1>To-do List App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTask}>Add task</button>
      </div>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
