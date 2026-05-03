/** @format */

import React, { act } from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload; //(this is for all tasks)
    case "ADD_TASK":
      return [...state, action.payload]; //(this is for one task)
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.text }
          : task,
      );

    default:
      return state;
  }
};

export default taskReducer;
