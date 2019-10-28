import React from 'react';
import ToDoneItem from './ToDoneItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class ToDonesContainer extends React.Component {
  render() {
    const todones = this.props.items;

    const toDoNesItems = todones.map(el => {
      return (
        <ToDoneItem
          item={el}
          key={el.id}
          onStatusChange={this.props.handleChange}
        ></ToDoneItem>
      );
    });

    return (
      <div className="todones-container">
        <div className="title">
          <h3>BACKLOG</h3>
          {todones.length == 0 && <FontAwesomeIcon icon={faSpinner} spin />}
        </div>{' '}
        {todones.length > 0 && toDoNesItems}
      </div>
    );
  }
}

export default ToDonesContainer;
