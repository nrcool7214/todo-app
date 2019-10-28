import React from 'react';
import ToDoItem from './ToDoItem';

const ToDosContainer = () => {
  const todos = [
    { text: 'Wash my face!', done: false },
    { text: 'Walk the dog', done: false },
    { text: 'Pay the rent', done: false },
    { text: 'Make so moneys', done: false }
  ];

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
