/** @format */

import React, { useEffect, useReducer, useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskContext";

const App = () => {
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((data) => data.json())
  //     .then((data) => setTodos(data.slice(0, 10)));
  // }, []);

  // const addTask = (title) => {
  //   const newTask = {
  //     title: title,
  //     id: todos[todos.length - 1].id + 1,
  //   };
  //   setTodos([...todos, newTask]);
  // };

  // const toggleTask = (id) => {
  //   const updatedTodos = todos.map((task) => {
  //     if (task.id === id) {
  //       return { ...task, completed: !task.completed };
  //     } else {
  //       return task;
  //     }
  //   });
  //   setTodos(updatedTodos);
  // };
  // const editTask = (id, title) => {
  //   const updatedTodos = todos.map((task) => {
  //     if (task.id === id) {
  //       return { ...task, title: title };
  //     } else {
  //       return task;
  //     }
  //   });
  //   setTodos(updatedTodos);
  // };

  // const deleteTask = (id) => {
  //   const updatedTodos = todos.filter((task) => task.id != id);
  //   setTodos(updatedTodos);
  // };
  //user delete လုပ်လိုက်တဲ့ id နဲ့ မညီတာတွေပဲပြပါ
  // user နှိပ်လိုက်တဲ့ id က လွဲရင် ကျန်တဲ့ id တွေကို ပြပေးပါ
  return (
    <>
      {/* <div className='container max-w-2xl mx-auto p-4'>
        <Header />
        <TaskInput addTask={addTask} />
        <TaskList
          todos={todos}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      </div> */}

      <TaskProvider>
        <div className='container max-w-2xl mx-auto p-4'>
          <Header />
          <TaskInput />
          <TaskList />
        </div>
      </TaskProvider>
    </>
  );
};

export default App;
