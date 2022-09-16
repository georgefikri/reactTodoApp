import React from 'react';

function Todo({ text, setTodos, todos, todo, setHasTaskDeleted }) {
  // states

  // functions
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    setHasTaskDeleted(true);
    setTimeout(() => {
      setHasTaskDeleted(false);
    }, 2500);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // return jsx
  return (
    <li className="todo">
      <button
        className={`complete-btn ${todo.completed && 'active'}`}
        onClick={completeHandler}
      >
        {todo.completed && <i className="fas fa-check"></i>}
      </button>
      <label className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</label>

      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default Todo;
