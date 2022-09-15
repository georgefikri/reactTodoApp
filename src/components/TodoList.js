import React from 'react';
import Todo from './Todo';
import NoTasks from './NoTasks';
import { useNavigate } from 'react-router-dom';

function TodoList({ todos, setTodos }) {
  // states & variables
  const navigate = useNavigate();

  // functions
  const handleNavigateToAddNew = () => navigate('/newTask');

  return (
    <div className="todo-container">
      <header>
        <h1>Tasks</h1>
      </header>
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos?.map((todo) => (
            <Todo
              key={todo?.id}
              text={todo.text}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
            />
          ))}
        </ul>
      ) : (
        <NoTasks />
      )}

      <button className="new-task-button" onClick={handleNavigateToAddNew}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoList;
