import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";
import { AddTask } from "./components/AddTask/AddTask";
import { TaskDateContext } from "./helper/context";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  useEffect(() => {}, []);

  console.log("tasks////////", tasks);

  return (
    <TaskDateContext.Provider
      value={{ task, setTask, date, setDate, tasks, setTasks }}
    >
      <div className="App">
        <AddTask />
        <div className="breakingline"> </div>

        {!!tasks &&
          tasks.map((elm) => {
            console.log("elm.id", elm.id);
            return (
              <Task
                setTasks={setTasks}
                tasks={tasks}
                id={elm.id}
                taskName={elm.taskName}
                dueTo={elm.dueTo}
                creationDate={elm.creationDate}
              />
            );
          })}
      </div>
    </TaskDateContext.Provider>
  );
}

export default App;
