/** @format */

import React, { useState, useRef, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskInput = (/*{ addTask }*/) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const { dispatch } = useContext(TaskContext);

  const addTask = () => {
    if (text.trim() == "") return;
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), title: text, completed: false },
    });
    setText("");
    inputRef.current.focus();
  };
  return (
    <div className='mb-5 flex gap-2'>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type='text'
        placeholder='Enter Task...'
        className='border border-gray-300 rounded px-3 py-2 flex-1'
      />
      <button
        onClick={() => {
          addTask();
          // addTask(text);
          // setText("");
          // inputRef.current.focus();
        }}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
