import React from 'react';

const ToDoneItem = props => {
  const data = props.item;
  return (
    <div className="todones-item">
      <p>{data.text}</p>
      <div className="actions">
        <button className="btn">&#10004;</button>
      </div>
    </div>
  );
};

export default ToDoneItem;
