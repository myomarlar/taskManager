/** @format */

import React, { useState } from "react";

const TaskList = ({ todos, toggleTask, editTask }) => {
  const [edittingId, setEdittingId] = useState(null);
  const [text, setText] = useState("");
  return (
    <div className='container mx-auto p-4'>
      {todos.map((task, index) => (
        <div
          key={index}
          className='flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 mb-2'
        >
          {edittingId == task.id ? (
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                className = "border border-gray-300 rounded px-3 py-2 flex-1";
              }}
            />
          ) : (
            <span
              className={`text-lg font-medium mb-2 sm:mb-0  ${task.completed ? "line-through" : ""}`}
            >
              {task.title}
            </span>
          )}
          <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
            <button
              onClick={() => {
                toggleTask(task.id);
              }}
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => {
                setEdittingId(task.id);
                setText(task.title);
              }}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              {edittingId == task.id ? "Save" : "Edit"}
            </button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              Delete
            </button>
          </div>
        </div>
      ))}

      {todos.length === 0 && (
        <div className='text-center text-gray-500 text-lg'>
          No tasks yet. Add one to get started
        </div>
      )}
    </div>
  );
};

export default TaskList;
