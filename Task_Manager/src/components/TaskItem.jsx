// src/components/TaskItem.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const isOverdue = new Date(task.dueDate) < new Date();
  const priorityColors = {
    High: "red",
    Medium: "orange",
    Low: "green",
  };

  return (
    <div
      className="task-item"
      style={{ borderLeft: `5px solid ${priorityColors[task.priority]}` }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      {isOverdue && <p style={{ color: "red" }}>Overdue</p>}
      <p>
        Priority:{" "}
        <span style={{ color: priorityColors[task.priority] }}>
          {task.priority}
        </span>
      </p>
      <div className="btn-container">
        <button onClick={() => onUpdate(task)} className="btn btn-secondary">
          <FontAwesomeIcon icon={faEdit} /> Edit
        </button>
        <button onClick={() => onDelete(task.id)} className="btn btn-danger">
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
