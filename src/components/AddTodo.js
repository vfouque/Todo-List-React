import React from 'react'
import { useState } from 'react'
import Button from './Button';

function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e){
    if(e.key === "Enter" && value.length){
      createTodo();
    }
  }

  async function createTodo() {
    try{
      setLoading(true);
      setError(null);
      const response = await fetch('https://restapi.fr/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',          
        },
        body: JSON.stringify({
          content:value,
          edit:false,
          done:false,
        }),
      })
      if(response.ok){
        const todo = await response.json();
        addTodo(todo);
        setValue('');      
      } else {
        setError("oops c'est une erreur");
      }
    } catch (e) {
      setError("oops c'est une erreur");
    } finally {
      setLoading(false)
    }
  }

  function handleClick() {
    if (value.length) {
      createTodo();
    }
  }
  

  return (
    <>    
      <div className='d-flex flex-row justify-content-center align-items-center mb-15'>
        <input onChange={handleChange} onKeyDown={handleKeyDown} value={value} type="text" placeholder="Ajouter une todo" className="mr-15 flex-fill" />
        <Button text={loading ? 'Chargement' : 'Ajouter'} onClick={handleClick} />
      </div>
      {error && <p style={{color:'red'}}>{error}</p>}
    </>
    )
}

export default AddTodo