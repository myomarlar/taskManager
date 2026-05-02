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
**App.jsx**
Create addTask fun _--->_ addTask function (title parameter, const newTask = object
{-->title:title,id: todos[todos.lenght-1].id+1, setTodos([...todos,newTask]))}

**For Input-- accept new text, get new text, cursor**
**TaskInput.jsx**

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
**1.App.jsx**
Create toggleTask fun _--->_ toggleTask =(id)=>{const updatedTask = todos.map((task)={if(){}})}
<TaskList toggelTask={toggleTask}>

**2.TaskList.jsx**

1. Add props _--->_ toggeTask
2. Add Line-through In input _--->_ className = {`${task.completed ? "line-through" : ""}`}
3. In addBtn _--->_ onClick(()=>{toggleTask.id}), Add text change {task.completed? "Completed"  
   :"Undo"}

**For EditBtn in TaskList**
**1.App.jsx**
Create editTask fun _--->_ editTask = (id,title) =>{const editTask = todos.map((task)=>{if(){}})}

**2.TaskList.jsx**

1. Add props _--->_ editTask
2. Editting State _--->_ useState(null)
3. text State _--->_ useState("")
4. EditBtn onClick _--->_ onClick={() => {setEdittingId(task.id);setText(task.title);}}
5. EditBtn in Content _--->_ {edittingId == task.id ? "Save" : "Edit"}
6. To show text in span _--->_ {edittingId == task.id ? (<**new input**>) : (<span></span>)}
7. EditBtn onClick _--->_ onClick={() => {if (edittingId == task.id) {editTask(task.id, text);
   setEdittingId(null);setText("");} else {setEdittingId(task.id);setText(task.title);}}}

**For DeleteBtn in TaskList**
**1.App.jsx**
Create delete fun _--->_ const deleteTask = (id) => {const updatedTodos = todos.filter((task)=>task.id != id)}

**2.TaskList.jsx**

1. Add props _--->_ deleteTask
2. DeleteBtn onClick _--->_ onClick = {()=>{deleteTask(task.id)}}
