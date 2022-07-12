import React, { useState } from "react";
import "./Task.css";
import { TaskContext } from "../../helper/context";

// import { removingTask2 } from "../features/tasks";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

export function Task(props) {
  const removeTask = (e) => {
    // console.log("id de las props", props.id);
    const newTasks = props.tasks.filter((elm) => {
      return elm.id !== props.id;
    });
    console.log("newTasks", newTasks);
    props.setTasks(newTasks);
  };

  // const removeTask2 = (e) => {
  //   console.log("id de las props", props.id);
  //   removingTask({
  //     // taskName: task,
  //     // creationDate: new Date(),
  //     // dueTo: date,
  //     // id: uniqid(),
  //     id: props.id,
  //   });
  // };

  return (
    <>
      <div className="taskCard">
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
          {/* <button className="closingButton" onClick={removeTask}>
            X
          </button> */}
          <button className="closingButton" onClick={(e) => removeTask(e)}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
