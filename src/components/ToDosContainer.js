import React from 'react';

class ToDosContainer extends React.Component {
  render() {
    return (
      <div className="todos-container">
        <form className="todo-form">
          <label className="input-item">
            <input type="text" name="todo" />
          </label>
          <input className="submit" type="submit" value="ADD" />
        </form>
        <div className="todos">
          <h3>TO DO</h3>
          <div className="todo-item">
            <p>I am done!</p>
          </div>
          <div className="todo-item">
            <p>I am done!</p>
          </div>
          <div className="todo-item">
            <p>I am done!</p>
          </div>
          <div className="todo-item">
            <p>I am done!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDosContainer;
