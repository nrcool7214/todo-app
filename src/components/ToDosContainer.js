import React from 'react';
import ToDoItem from './ToDoItem';

const ToDosContainer = props => {
  const todos = props.items;

  const toDoItems = todos.map(el => {
    return <ToDoItem item={el} key={el.text}></ToDoItem>;
  });

  return (
    <div className="todos-container">
      <form className="todo-form">
        <label className="input-item">
          <input type="text" name="todo" />
        </label>
        <input className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {todos.length > 0 && toDoItems}
      </div>
    </div>
  );
};

export default ToDosContainer;
