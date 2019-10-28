import React from 'react';

class ToDoItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <div className="todo-item">
        <p>{item.text}</p>
        <div className="actions">
          <button
            className="btn"
            onClick={() => this.props.onStatusChange(item)}
          >
            &#10004;
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
