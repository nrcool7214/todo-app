import React from 'react';
import ToDoneItem from './ToDoneItem';

class ToDonesContainer extends React.Component {
  render() {
    const todones = this.props.items;

    const toDoNesItems = todones.map(el => {
      return (
        <ToDoneItem
          item={el}
          key={el.text}
          onStatusChange={this.props.handleChange}
        ></ToDoneItem>
      );
    });

    return (
      <div className="todones-container">
        <h3>BACKLOG</h3>
        {todones.length > 0 && toDoNesItems}
      </div>
    );
  }
}

export default ToDonesContainer;
