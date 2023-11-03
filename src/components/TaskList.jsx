import React, { useState } from "react";

const TaskList = ({ task, onDelete }) => {
  const [completed, setCompleted] = useState(task.status);
  return (
    <div key={task.id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          setCompleted(e.target.checked);
        }}
      />
      <span>{task.task}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskList;
