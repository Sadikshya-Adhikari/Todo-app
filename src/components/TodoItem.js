import React from 'react';

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.text}
      <div>
        <button className="completeButton" onClick={() => toggleComplete(index)}>
          {todo.completed ? 'Incomplete' : 'Completed'}
        </button>
        <button className="deleteButton" onClick={() => deleteTodo(index)}>Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
