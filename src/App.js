import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Task } from "./components/Task/Task";
import { AddTask } from "./components/AddTask/AddTask";
import { context } from "./helper/context";

function App() {
  // const { tasks, setTasks } = useContext(TasksContext);
  // const { task, setTask } = useContext(TasksContext);
  // const { date, setDate } = useContext(datesContext);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState("");
  useEffect(() => {
    console.log("tasks", tasks);
    // localStorage.setItem("to-do-app", JSON.stringify(tasks));--------
    // const storedTask = JSON.parse(localStorage.setItem("to-do-app"));
    // console.log("storedTask al modificar task", storedTask);
  }, [tasks]);

  useEffect(() => {
    // const storedTask = JSON.parse(localStorage.getItem("to-do-app"));-------------
    // console.log("storedTask al iniciar", storedTask);
    // if (storedTask) setTasks(storedTask);----------
  }, []);

  // const store = generateStore();

  // const taskRedux = useSelector((state) => state.tasks.value);

  console.log("tasks////////", tasks);

  return (
    <context>
      <div className="App">
        <AddTask setTasks={setTasks} tasks={tasks} />
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
    </context>
  );
}

export default App;
