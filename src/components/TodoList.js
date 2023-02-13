import EditTodo from './EditTodo'
import TodoItem from './TodoItem'
import React from 'react'

function TodoList({ todoList, deleteTodo, toggleTodo, toggleTodoEdit, editTodo, selectedTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo._id}
            todo={todo}
            editTodo={(content) => editTodo(todo._id, content)}
            cancelEditTodo={() => toggleTodoEdit(todo._id)}
          />
        ) : (
          <TodoItem
            key={todo._id}
            todo={todo}
            editTodo={() => toggleTodoEdit(todo._id)}
            deleteTodo={() => deleteTodo(todo._id)}
            toggleTodo={() => toggleTodo(todo._id)}
            selectedTodo={() => selectedTodo(todo._id)}
          />
        )
      )}
    </ul>
  ) : <p>Aucune tâche en cours</p>

}

export default TodoList