import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo=>{
      return (
    //   <TodoItem completed={todo.completed} id={todo.id} title={todo.title} key={todo.id}/>
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      )
    })}
  
  </ul>
  )
}
