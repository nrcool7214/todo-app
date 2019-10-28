import React from 'react';

class ToDoItem extends React.Component {
  checkItem = () => {
    console.log(this.props.item);
  };

  render() {
    const data = this.props.item;

    return (
      <div className="todo-item">
        <p>{data.text}</p>
        <div className="actions">
          <button className="btn" onClick={this.checkItem}>
            &#10004;
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
