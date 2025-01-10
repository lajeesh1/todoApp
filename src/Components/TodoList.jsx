import React, { useRef } from 'react'
import tick from '../assets/tick.png'
import nottick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoList = (item,index) => {
 

  return (
    <div className='flex my-3 items-center gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={tick} alt="" />
            <p index={index} className='tex-slate-700 ml-4 text-[17px] first-word-capitalize'>{item.text} </p>
            
        </div>
        <img className='w-7' src={delete_icon} alt="" />
      
    </div>
  )
}

export default TodoList
