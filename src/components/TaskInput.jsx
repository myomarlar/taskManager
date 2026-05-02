/** @format */

import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState("");

  return (
    <div className='mb-5 flex gap-2'>
      <input
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
        }}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
