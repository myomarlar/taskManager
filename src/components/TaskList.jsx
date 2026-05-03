/** @format */

import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = ({ /*todos,*/ toggleTask, editTask, deleteTask }) => {
  const [edittingId, setEdittingId] = useState(null);
  const [text, setText] = useState("");
  const { tasks } = useContext(TaskContext);
  return (
    <div className='container mx-auto p-4'>
      {tasks.map((task, index) => (
        <div
          key={index}
          className='flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 mb-2'
        >
          {edittingId == task.id ? (
            <input
              className='border border-gray-300 rounded px-3 py-2 flex-1'
              value={text}
              onChange={(e) => {
                setText(e.target.value);
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
                if (edittingId == task.id) {
                  editTask(task.id, text);
                  setEdittingId(null);
                  setText("");
                } else {
                  setEdittingId(task.id);
                  setText(task.title);
                }
              }}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              {edittingId == task.id ? "Save" : "Edit"}
            </button>
            <button
              onClick={() => {
                deleteTask(task.id);
              }}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {tasks.length === 0 && (
        <div className='text-center text-gray-500 text-lg'>
          No tasks yet. Add one to get started
        </div>
      )}
    </div>
  );
};

export default TaskList;
