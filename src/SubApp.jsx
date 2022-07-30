import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";
import { AddTask } from "./components/AddTask/AddTask";
import { TaskDateContext } from "./helper/context";
import { RedTask } from "./components/RedTask/RedTask";

function SubApp
() {
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
  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  useEffect(() => {}, []);

  console.log("tasks////////", tasks);

  return (

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
            if (months - new Date().getMonth() + 1 > 0) {
              setDeathline(true);
            console.log("settingdeathline to true, color GREEN", deathline);
              return (
                <Task
                  id={elm.id}
                  taskName={elm.taskName}
                  dueTo={elm.dueTo}
                  creationDate={elm.creationDate}
                  color={deathline}
                />
                )
            } else {
              setDeathline(false);
              console.log("NOT settingdeathline to true");
              console.log("settingdeathline to false, color RED", deathline);
              return (
                <RedTask
                  id={elm.id}
                  taskName={elm.taskName}
                  dueTo={elm.dueTo}
                  creationDate={elm.creationDate}
                  color={deathline}
                />
              )
            }

     
          })}
      </div>
   
  );
}

export default SubApp;
