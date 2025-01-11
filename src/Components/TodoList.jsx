import React, { useRef } from 'react'
import tick from '../assets/tick.png'
import nottick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoList = ({text,id, isComplete, deleteTodo, toggle}) => {
 

  return (
    <div className='flex my-3 items-center gap-2 '>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer '>
            <img className='w-7' src={isComplete? tick: nottick} alt="" />
          <p index={id} className={`tex-slate-700 ml-4 text-[17px] first-word-capitalize ${isComplete? "line-through":""} `}>{text} </p>
            
        </div>
        <img onClick={()=>{deleteTodo(id)}} className='w-4' src={delete_icon} alt="" />
      
    </div>
  )
}

export default TodoList
