import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({todos,handleToggle,deleteTodo,focus}) {
console.log(todos)
  return (
    <>
      <ul id="myUL">
        {todos.length > 0 ?
          todos.map((todo,index)=>{
            return (
              <TodoItem key={index} todo={todo} handleToggle={handleToggle} deleteTodo={deleteTodo}/>
            )
          })
          : focus  && <h2>Todo list not found</h2>
        }
      </ul>
    </>
  )
}
