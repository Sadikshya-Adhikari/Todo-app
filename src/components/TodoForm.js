import React, { useState } from 'react';

function TodoForm( {addTodo} ) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input class="input"
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Add Todo" 
      />
      <button class="addButton" type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
