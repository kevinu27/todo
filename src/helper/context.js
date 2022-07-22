import React, { useState, useContext, createContext } from "react";

export const TaskDateContext = createContext({
  task: "",
  setTask: () => {},
  tasks: [],
  setTasks: () => {},
  date: "",
  setDate: () => {},
  deathline: false,
  setDeathline: () => {},
});
