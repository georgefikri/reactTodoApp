// create a react component displaying no tasks found and style it

import React from 'react';

function NoTasks() {
  // states
  //   style no tasks found
  const noTasksStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '2rem',
    color: 'red',
  };

  // functions

  // hooks

  // return jsx
  return (
    <div style={noTasksStyle}>
      <h1>No tasks found</h1>
    </div>
  );
}

export default NoTasks;
