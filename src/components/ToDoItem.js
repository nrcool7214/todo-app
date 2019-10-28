import React from 'react';

const ToDoItem = props => {
  const data = props.item;
  return (
    <div className="todo-item">
      <p>{data.text}</p>
      <div className="actions">
        <button className="btn">&#10004;</button>
      </div>
    </div>
  );
};

export default ToDoItem;
