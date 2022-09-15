import React from 'react';
import { useNavigate } from 'react-router-dom';

function Form({ setInputText, inputText, setTodos, todos }) {
  // states
  const navigate = useNavigate();

  // functions
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setInputText('');
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
  };

  const handleNavigateBack = () => navigate('/');

  return (
    <div className="create-new-task-container">
      <button className="back-btn" onClick={handleNavigateBack}>
        <i className="fas fa-angle-left "></i>
        back
      </button>
      <header>
        <h1>Create a new Task</h1>
      </header>
      <form>
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
          placeholder="Add a new task"
        />
        <button className="todo-button" type="submit" onClick={submitTodoHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}

export default Form;
