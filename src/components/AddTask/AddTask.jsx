import React, { useContext, useState } from "react";
import "./AddTask.css";
import uniqid from "uniqid";
import { TaskDateContext } from "../../helper/context";

export function AddTask(props) {
  const {
    tasks,
    setTasks,
    task,
    setTask,
    date,
    setDate,
    deathline,
    setDeathline,
  } = React.useContext(TaskDateContext);

  const addingTask = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
    console.log(task);
  };

  const addingDate = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const addingTasks = (e) => {
    const tasksCopy = tasks;
    setTasks([
      ...tasksCopy,
      {
        taskName: task,
        creationDate: new Date(),
        dueTo: date,
        id: uniqid(),
      },
    ]);
    setTask("");
  };

  return (
    <>
      <div className="AddtaskCard">
        <label for="Task">Task</label>

        <input
          type="text"
          name="Task"
          placeholder="Task..."
          value={task}
          onChange={addingTask}
        />
        <label>Due to</label>
        <input type="date" onChange={addingDate} />
        <button onClick={addingTasks}>Add TAsk</button>
      </div>
    </>
  );
}
