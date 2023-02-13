import { useState } from "react";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import ThemeContext from './context/ThemeContext'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [theme, setTheme] = useState('primary')

  //on cré la fonction qui va etre transmise en prop à l'enfant AddTodo//
  function addTodo(todo) {   
    setTodoList([...todoList, todo])
  }

  function deleteTodo(_id) {
    setTodoList(todoList.filter((todo) => todo._id !== _id));
  }

  function toggleTodo(_id) {
    setTodoList(
      todoList.map((todo) => (todo._id === _id ? ({ ...todo, done: !todo.done }) : todo))
    )
  }

  function toggleTodoEdit(_id) {
    setTodoList(
      todoList.map((todo) => (todo._id === _id ? ({ ...todo, edit: !todo.edit }) : todo))
    )
  }

  function editTodo(_id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo._id === _id ? { ...todo, edit: false, content } : todo
      )
    );
  }

  function selectedTodo(_id) {
    setTodoList(
      todoList.map(
        todo => todo._id === _id ? (
          { ...todo, selected: true }
        ) : (
          { ...todo, selected: false }
        )
      )
    )
  }  

  function handleChange(e) {
    setTheme(e.target.value)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="d-flex justify-content-center align-items-center p-20">
        <div className="card container p-20">
          <h1 className="mb-20 d-flex justify-content-center align-items-center">
            <span className="flex-fill">Liste de tâches</span>
            <select value={theme} onChange={handleChange}>
              <option value="primary">Rouge</option>
              <option value="secondary">Bleu</option>
            </select>
          </h1>
          <AddTodo addTodo={addTodo} />
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            toggleTodoEdit={toggleTodoEdit}
            editTodo={editTodo}
            selectedTodo={selectedTodo}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
