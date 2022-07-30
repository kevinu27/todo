import React, { useState } from "react";
import "./RedTask.css";
import { TaskContext } from "../../helper/context";
import { TaskDateContext } from "../../helper/context";

export function RedTask(props) {
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

  const removeTask = (e) => {
    const newTasks = tasks.filter((elm) => {
      return elm.id !== props.id;
    });
    console.log("newTasks", newTasks);
    setTasks(newTasks);
  };

  return (
    <>
      <div className='REDtaskCard
'>
        <div>
          <div className="date">
            <p className="title">Added at: </p>
            <p className="actualDate">
              {props.creationDate.toString().slice(4, 16)}
            </p>
          </div>
          <div className="taskName">
            <p className="title">Task:</p>
            <p>{props.taskName}</p>
          </div>
          <div className="taskName">
            <p className="title">Due to:</p>
            <p className="actualDate">{props.dueTo}</p>
          </div>
        </div>
        <div>
          <button className="closingButton" onClick={(e) => removeTask(e)}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
