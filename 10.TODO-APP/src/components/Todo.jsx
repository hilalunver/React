import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'

function Todo(todo) {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', border:'1px solid lightgrey',padding:'10px'}}>
        <div>
            {todo.todo.content}
        </div>
        <div>
            <IoIosRemoveCircle className='todo-icons' />
            <FaEdit className='todo-icons'/>
        </div>
    </div>
  )
}

export default Todo