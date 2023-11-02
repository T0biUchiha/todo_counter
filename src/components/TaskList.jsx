import React from "react";

const TaskList = (props) => {
  return (
    <>
      {props === true ? (
        <input type="checkbox" checked />
      ) : (
        <input type="checkbox" />
      )}{" "}
      <span>{props.task}</span>
    </>
  );
};

export default TaskList;
