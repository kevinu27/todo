import React, { useState, useEffect } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";
import { AddTask } from "./components/AddTask/AddTask";
import { Provider } from "react-redux";
// import generateStore from "./components/redux/store";
import { useSelector } from "react-redux";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // console.log("tasks", tasks);
    localStorage.setItem("to-do-app", JSON.stringify(tasks));
    // const storedTask = JSON.parse(localStorage.setItem("to-do-app"));
    // console.log("storedTask al modificar task", storedTask);
  }, [tasks]);

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("to-do-app"));
    console.log("storedTask al iniciar", storedTask);
    if (storedTask) setTasks(storedTask);
  }, []);

  // const store = generateStore();

  const taskRedux = useSelector((state) => state.tasks.value);

  console.log("taskRedux////////", taskRedux);
  console.log("tasks////////", tasks);

  return (
    <div className="App">
      <AddTask setTasks={setTasks} tasks={tasks} />
      <div className="breakingline"> </div>

      {!!taskRedux &&
        taskRedux.map((elm) => {
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
  );
}

export default App;
