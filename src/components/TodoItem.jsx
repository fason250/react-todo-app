import '../Style/TodoItem.css'

const TodoItem = ({data,setTask}) => {
    const {number,text,display} = data

    const toggle = (number)=>{
        let data = JSON.parse(localStorage.getItem("todos"))
        for(let i = 0; i < data.length; i++){
            if(data[i].number === number){
                if(data[i].display===""){
                    data[i].display = "checked"
                }else{
                    data[i].display = ""
                }
                break
            }
        }
        setTask(data)
    }

    const deleteTask = (number)=>{
        let data = JSON.parse(localStorage.getItem("todos"))
        data = data.filter((item)=> item.number !== number)
        setTask(data)
    }

  return (
    <div className='todo-items'>
        <div className="todo-items-container" onClick={()=>toggle(number)}>
            {display === "" ?<button className='check'>🔘</button>:<button className='check'>✅</button>}

            <div className={`todo-items-text ${display}`}>{text}</div> 
        </div>
        <button className='todo-item-remove' onClick={()=>deleteTask(number)}>❌</button>          
    </div>
  )
}

export default TodoItem