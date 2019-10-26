import React from 'react';

class ToDonesContainer extends React.Component {
  render() {
    return (
      <div className="todones-container">
        <h3>BACKLOG</h3>
        <div className="todones-item">
          <p>I am done!</p>
          <div className="actions">
            <button className="btn">&#8635;</button>
          </div>
        </div>
        <div className="todones-item">
          <p>I am done!</p>
          <div className="actions">
            <button className="btn">&#8635;</button>
          </div>
        </div>
        <div className="todones-item">
          <p>I am done!</p>
          <div className="actions">
            <button className="btn">&#8635;</button>
          </div>
        </div>
        <div className="todones-item">
          <p>I am done!</p>
          <div className="actions">
            <button className="btn">&#8635;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDonesContainer;
