/** @format */

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);
  console.table(todos);

  const addTask = (title) => {
    const newTask = {
      title: title,
      id: todos[todos.length - 1].id + 1,
    };
    setTodos([...todos, newTask]);
  };

  const toggleTask = (id) => {
    const updatedTodos = todos.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
      setTodos(updatedTodos);
    });
  };

  return (
    <div className='container max-w-2xl mx-auto p-4'>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList todos={todos} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
