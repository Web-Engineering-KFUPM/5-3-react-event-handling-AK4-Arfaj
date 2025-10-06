import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {/* Task 2 – Display Placeholder if No Tasks Yet */}
      
      <p>{tasks.length == 0? "No tasks yet :)": "There are tasks!"}</p>
      {/* Task 2 & 3 – Map tasks to TaskItem */}
      {tasks.map(task =>{
        return <TaskItem id={task["id"]} text={task["text"]}/>
      }
      )}
    </ul>
  );
}
