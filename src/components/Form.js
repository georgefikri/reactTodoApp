import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form({ setInputText, inputText, setTodos, todos }) {
  // states
  const [isTaskAdded, setIsTaskAdded] = useState(false);
  const navigate = useNavigate();

  // functions
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // when enter is pressed add the todo to the list
    if (e.keyCode === 13) {
      e.preventDefault();
      setInputText('');
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setIsTaskAdded(true);
      setTimeout(() => {
        setIsTaskAdded(false);
      }, 2500);
    }
  };

  const handleNavigateBack = () => navigate('/');

  return (
    <div className="create-new-task-container">
      <button className="back-btn" onClick={handleNavigateBack}>
        <i className="fas fa-angle-left "></i>
        tasks
      </button>
      {isTaskAdded && (
        <div className="success-message">
          <p>Task added successfully!</p>
        </div>
      )}
      <header>
        <h1>Create a new Task</h1>
      </header>
      <form>
        {/* <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
          placeholder="Add a new task"
          onKeyDown={submitTodoHandler}
        /> */}
        {/* add a multiline input */}
        <textarea
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="todo-input"
          placeholder="Add a new task and press enter to add"
          onKeyDown={submitTodoHandler}
        />
        {/* <button className="todo-button" type="submit" onClick={submitTodoHandler}>
          <i className="fas fa-plus-square"></i>
        </button> */}
      </form>
    </div>
  );
}

export default Form;
