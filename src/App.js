import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";
import { AddTask } from "./components/AddTask/AddTask";
import { TaskDateContext } from "./helper/context";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [deathline, setDeathline] = useState(false);
  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  useEffect(() => {}, []);

  console.log("tasks////////", tasks);

  return (
    <TaskDateContext.Provider
      value={{
        task,
        setTask,
        date,
        setDate,
        tasks,
        setTasks,
        deathline,
        setDeathline,
      }}
    >
      <div className="App">
        <AddTask />
        <div className="breakingline"> </div>

        {!!tasks &&
          tasks.map((elm) => {
            console.log("elm.dueTo", elm.dueTo);
            console.log("new Date().getDate()", new Date().getDate());
            console.log("new Date().getMonth() + 1", new Date().getMonth() + 1);
            const months = parseInt(elm.dueTo.substring(5, 7));
            console.log("months", parseInt(elm.dueTo.substring(5, 7)));
            console.log();
            if (months - new Date().getMonth() + 1) {
              //setDeathline(true);
              // console.log("settingdeathline to true, color GREEN", deathline);
            } else {
              console.log("NOT settingdeathline to true");
            }

            console.log("elm.id", elm.id);
            return (
              <Task
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
