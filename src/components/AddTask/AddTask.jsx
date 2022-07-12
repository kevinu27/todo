import React, { useContext, useState } from "react";
import "./AddTask.css";
import uniqid from "uniqid";
import { context } from "../../helper/context";

export function AddTask(props) {
  // const [task, setTask] = useState("");
  // const [date, setDate] = useState("");
  const { task, setTask } = React.useContext(context);
  const { date, setDate } = React.useContext(context);

  const addingTask = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
    console.log(task);
  };

  const addingDate = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  // const taskRedux = useSelector((state) => state.tasks.value);

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
  };

  // addingTask({
  //   taskName: task,
  //   creationDate: new Date(),
  //   dueTo: date,
  //   id: uniqid(),
  // });

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
