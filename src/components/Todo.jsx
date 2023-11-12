// import TodoItem from "./TodoItem"
import { useEffect, useRef, useState } from 'react'
import '../Style/Todo.css'
import TodoItem from './TodoItem'

let count = 0
const Todo = () => {
    const [todos,setTodos] = useState([])
    const inputText = useRef(null)

    const addTodoTask = ()=>{
        setTodos([
            ...todos,
            {
                number: count++,
                text: inputText.current.value,
                display: ""
            }
        ])
        inputText.current.value = ""
        localStorage.setItem("task_count",count)
    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")))
        count = localStorage.getItem("task_count ")
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(todos)
            localStorage.setItem("todos",JSON.stringify(todos))
        },100)
    },[todos])

  return (
    <div className="todo">
        <div className="todo-header">Todo List App</div>
        <div className="todo-add">
            <input ref={inputText} type="text"  className='todo-input' placeholder='Enter your  Task' />
            <div onClick={()=>addTodoTask()} className="todo-add-btn">Add</div>
        </div>
        <div className="todo-list">
            { todos.length > 0 ?(
                todos.map((item,index)=>(
                    <TodoItem data={item} setTask={setTodos} key={index} />
                )) ) : <center><h3 style={{color:'#adadad',marginTop:'60px'}}>no task available</h3></center>
            }        
        </div>
    </div>
  )
}

export default Todo