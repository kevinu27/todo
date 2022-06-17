import React, { useState } from "react";
import "./AddTask.css";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
import { addingTask2 } from "../features/tasks";
import { useSelector } from "react-redux";

export function AddTask(props) {
  const dispatch = useDispatch();
  const taskRedux2 = useSelector((state) => state.tasks.value);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const addingTask = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const addingDate = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const taskRedux = useSelector((state) => state.tasks.value);

  const addingTasks = (e) => {
    // console.log("props.tasks", props.tasks);
    const tasksCopy = props.tasks;
    props.setTasks([
      ...tasksCopy,
      {
        taskName: task,
        creationDate: new Date(),
        dueTo: date,
        id: uniqid(),
      },
    ]);

    setTask("");
    dispatch(
      addingTask2({
        taskName: task,
        creationDate: new Date(),
        dueTo: date,
        id: uniqid(),
      })
    );

    console.log("taskRedux al añadir task", taskRedux2);
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
