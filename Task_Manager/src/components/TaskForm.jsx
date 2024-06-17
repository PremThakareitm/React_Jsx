// src/components/TaskForm.jsx
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({ currentTask, onSave }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: new Date(),
    priority: "Medium",
  });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    } else {
      setTask({
        title: "",
        description: "",
        dueDate: new Date(),
        priority: "Medium",
      });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleDateChange = (date) => {
    setTask({ ...task, dueDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({
      title: "",
      description: "",
      dueDate: new Date(),
      priority: "Medium",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      ></textarea>
      <DatePicker
        selected={task.dueDate}
        onChange={handleDateChange}
        className="date-picker"
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
