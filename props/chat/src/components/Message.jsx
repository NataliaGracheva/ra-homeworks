import React from 'react';

function Message({message}) {

 return (
    <li>
    <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i> {message.from.name}</span>
      <span className="message-data-time">{message.time}</span>
    </div>
    <div className="message my-message">
      {message.text}
    </div>
  </li>
 );
}

export default Message;