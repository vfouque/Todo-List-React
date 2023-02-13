import React from 'react'
import Button from './Button';

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectedTodo}) {
  return (
    <ul className='mt-20 flex-fill'>
      <li onClick={selectedTodo} className={ `d-flex justify-content-center align-items-center ${todo.selected === true ? 'selected' : ''}`}>
        <span className='flex-fill ml-15'>{todo.content} {todo.done && '✅'}</span>
        <Button text={todo.done ? "Invalider" : "Valider"} className="mr-15" onClick={(e) => {
          e.stopPropagation();
          toggleTodo()
        }}/>        
        <Button text="Modifier" className="mr-15" onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }} />        
        <Button text="Supprimer" className="" onClick={(e) => {
          e.stopPropagation();
          deleteTodo()
        }}/>        
      </li>
    </ul>
  )
}

export default TodoItem