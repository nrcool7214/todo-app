import React from 'react';

class ToDoneItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <div className="todones-item">
        <p>{item.text}</p>
        <div className="actions">
          <button
            className="btn"
            onClick={() => this.props.onStatusChange(item.id)}
          >
            &#8635;
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoneItem;
