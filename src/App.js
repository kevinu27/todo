import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";
import { AddTask } from "./components/AddTask/AddTask";
import { TaskDateContext } from "./helper/context";
import SubApp from "./SubApp";

function App() {

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [deathline, setDeathline] = useState(false);

  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  


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
       <SubApp></SubApp>
   
   
       </TaskDateContext.Provider>
   
  );
}

export default App;
