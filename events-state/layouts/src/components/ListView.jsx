import React from 'react'

function ListView(props) {
  const { items } = props;

  const renderItems = (items) => {
    return items.map((item, i) => {
      return (
        <li className="list-item" key={i}>
          {item}
        </li>
      );
    });
  };

  return (
    <ul className="list">
      {renderItems(items)}
    </ul>
  );
}

export default ListView