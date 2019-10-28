import React from 'react';
import ToDoneItem from './ToDoneItem';

const ToDonesContainer = props => {
  const todones = props.items;

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
