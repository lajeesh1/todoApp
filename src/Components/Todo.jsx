
import todo_icon from '../assets/todo_icon.png'  
import TodoList from './TodoList'
import React, { useEffect, useRef, useState } from 'react'

const Todo = () => {
  const [todoList, setTodoList]= useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[])

  const inputRef = useRef()
  const add =()=>{
const inputText = inputRef.current.value;
if(inputText === ""){
  return alert('Add your task');
}
const newTodo = {
  id:Date.now(),
  text:inputText,
  isComplete:false,
}
setTodoList((prev)=>[...prev,newTodo]);
inputRef.current.value=""
inputRef.current.focus();

 }

 const deleteTodo = (id) => {
  setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
}

const toggle =(id)=>{
setTodoList((prevTodos)=>{
return prevTodos.map((todo)=>{
if(todo.id === id){
  return {...todo, isComplete :!todo.isComplete}
}
return todo;
})
})
}

useEffect(()=>{
localStorage.setItem('todos',JSON.stringify(todoList))
},[todoList])



  return (
    <div className=' bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
        {/* ------title----- */}
        <div className='flex items-center mt-7 gap-2'>
            <img src={todo_icon} className='w-8' alt="" />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

        {/* ------input----- */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full' >
            <input autoFocus ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder:text-slate-600' type="text" placeholder='Add your task' />
            <button onClick={add} className='border-none bg-orange-600 rounded-full w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
        </div>
          {/* ------todo list----- */}
          <div>
            {todoList.map((item,index)=>{
              return <TodoList toggle={toggle} deleteTodo={deleteTodo} key={item.id} text={item.text} id={item.id} isComplete={item.isComplete} />
            })}
          </div>



  
    </div>
  )
}

export default Todo
