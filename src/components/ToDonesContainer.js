import React from 'react';
import ToDoneItem from './ToDoneItem';

const ToDonesContainer = () => {
  const todones = [
    { text: 'Make a website', done: true },
    { text: 'Call my mom', done: true },
    { text: 'Finish reading my book', done: true },
    { text: 'Make more moneys', done: true }
  ];

  const toDoNesItems = todones.map(el => {
    return <ToDoneItem item={el} key={el.text}></ToDoneItem>;
  });

  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {todones.length > 0 && toDoNesItems}
    </div>
  );
};

export default ToDonesContainer;
