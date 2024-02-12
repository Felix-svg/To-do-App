import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
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
    <div className="to-do-container">
      <h1>To-do List App</h1>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTask} className="add-button">Add task</button>
      </div>
      <div className="to-do-list">
        {tasks.length > 0 ? <h4>Your Tasks</h4> : null}
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => handleTaskDelete(index)} className="delete-button">x</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todo;
