import React, { useState } from "react";
import TaskList from "./TaskList";

const AddTask = () => {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleClick = () => {
    if (query !== "") {
      let newtask = {
        task: query,
        status: false,
      };
      setTasks([...tasks, newtask]);
      setQuery("");
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <input
        placeholder="Add tasks"
        value={query}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>Add Task</button>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <TaskList {...task} />
          </div>
        );
      })}
    </div>
  );
};

export default AddTask;
