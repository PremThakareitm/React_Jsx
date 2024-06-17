// src/App.jsx
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const handleSaveTask = (task) => {
    if (task.id) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      task.id = Date.now();
      setTasks([...tasks, task]);
    }
    setCurrentTask(null);
  };

  const handleUpdateTask = (task) => {
    setCurrentTask(task);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <TaskList
          tasks={tasks}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
        />
      </aside>
      <main className="main-content">
        <TaskForm currentTask={currentTask} onSave={handleSaveTask} />
      </main>
    </div>
  );
};

export default App;

