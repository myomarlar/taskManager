/** @format */

import React, { createContext, useContext, useEffect, useReducer } from "react";
import taskReducer from "./taskReducer";
export const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) =>
        dispatch({ type: "SET_TASKS", payload: data.slice(0, 10) }),
      );
  }, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
