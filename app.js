import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1>Mini Todo</h1>
      <div className="row">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
