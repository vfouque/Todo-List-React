import { useState } from 'react'
import Button from './Button';

function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);


  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }
  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className='d-flex flex-row justify-content-center align-items-center mb-15'>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        type="text" placeholder="Ajouter une todo" className="mr-15 flex-fill" />
      <Button text="Sauvegarder" className="mr-15" onClick={handleClick} />
      <Button text="Annuler" className="mr-15" onClick={cancelEditTodo} />
    </div>)
}

export default EditTodo