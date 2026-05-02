<!-- @format -->

# React + Vite + Tailwind

1. todos
2. component
3. props
4. state
5. conditional redering
6. list rendering
7. userReducer
8. Context
9. custom Hook
10. useRef
11. useEffect
12. Fetching data from api {JSON} placeholder
13. LocalhostStorage

Features

1. Add Task
2. Edit Task
3. Delete Task
4. Toggle Task
5. Filter Tasks

**UI Stage [Initial Build]**

**1. In App.jsx**

[todos,setTodos] ---> useState([])
fetch() ---> useEffect

**2. Components**

Header.jsx ---> h1
TaskInput.jsx ---> input,addBtn
TaskList.jsx ---> span,doneBtn,deleteBtn,editBtn

**For AddBtn inside input**
**1. In App.jsx**

1. Create addTask fun _--->_ addTask function (title parameter, const newTask = object
   {-->title:title,id: todos[todos.lenght-1].id+1, setTodos([...todos,newTask]))}

**For Input-- accept new text, get new text, cursor**
**4. In TaskInput.jsx**

1. Add props _--->_ TaskInput.jsx({addTask})
   [text,setText] _--->_ useState("")
2. Get input value _--->_<input value={text} onchange=(e)=>{setText(e.target.value)}>
3. Add onClick in addBtn _--->_ <button onClick={()=>{addTask(**text**)}}>
4. After add new task clear remaining value _--->_ <button onClick={()=>{addTask(text);
   **setTask("");**}}
5. Focus in Input(cursor) _--->_ Not every time re-render so use useRef
   Creat inputRef, Add in <input ref={inputRef}>, Add in <<button onClick={()=>{addTask(text);
   setTask("");**inputRef.current.focus();**}}

**For DoneBtn in TaskList**
**1. In App.jsx**

Create toggleTask fun _--->_ toggleTask =(id)=>{const updatedTask = todos.map((task)={if(){}})}
<TaskList toggelTask={toggleTask}>

**2. In TaskList.jsx**
Add props _--->_ toggeTask
Add Line-through In input _--->_ className = {`${task.completed ? "line-through" : ""}`}
In addBtn _--->_ onClick(()=>{toggleTask.id}), Add text change {task.completed? "Completed" : "Undo"}
