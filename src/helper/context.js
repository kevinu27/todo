import React, { useState, useContext, createContext } from "react";

// export const TaskContext = createContext({});
// export const TasksContext = createContext({});
// export const datesContext = createContext({});

export const TaskDateContext = createContext({
  task: "",
  setTask: () => {},
  tasks: [],
  setTasks: () => {},
  date: "",
  setDate: () => {},
});

// const contextProvider = (props) => {
//   const [task, setTask] = useState("");
//   const [date, setDate] = useState("");
//   const [tasks, setTasks] = useState("");

//   return (
//     <context.Provider value={{ task, setTask, date, setDate, tasks, setTasks }}>
//       {props.children}
//     </context.Provider>
//   );
// };

// export default contextProvider;
