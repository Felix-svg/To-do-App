import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState(["To-do List App", "Nyumbani"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    //ensures only non-empty tasks are added
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask("");
    }
  }

  function handleTaskDelete(index) {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
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
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => handleTaskDelete(index)}>x</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
