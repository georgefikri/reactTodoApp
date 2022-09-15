import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // states
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedItem = localStorage.getItem('todos');
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || [];
  });

  // hooks

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // return jsx
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList todos={todos} setTodos={setTodos} />} />
        <Route
          path="/newTask"
          element={
            <Form
              setInputText={setInputText}
              inputText={inputText}
              setTodos={setTodos}
              todos={todos}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
