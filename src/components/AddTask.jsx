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
        id:Date.now(),
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

  const onDelete =(id)=>{
    let todos = tasks.filter( task => task.id !== id);
    setTasks(todos);
  }


  return (
    <div>
      <input
        placeholder="Add tasks"
        value={query}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>Add Task</button>
      {tasks.map((task) => {
        return (
            <TaskList key={task.id} task={task} onDelete={onDelete} />
        );
      })}
    </div>
  );
};

export default AddTask;
