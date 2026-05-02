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

**3. In App.jsx**
create _--->_ addTask function (title parameter, const newTask = object {-->title:title,id: todos[todos.lenght-1].id+1, setTodos([...todos,newTask]))}
props add _--->_ TaskInput.jsx({addTask})
[text,setText] _--->_ useState("")
In input _--->_<input value={text} onchange=(e)=>{setText(e.target.value)}>
onClick in addBtn _--->_ <button onClick={()=>{addTask(**text**)}}>
