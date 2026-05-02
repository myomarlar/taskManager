/** @format */

import React, { useState, useRef } from "react";

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

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
          addTask(text);
          setText("");
          inputRef.current.focus();
        }}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
