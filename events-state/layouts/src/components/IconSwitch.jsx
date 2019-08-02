import React from 'react'

function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <div className="switch-view" onClick={onSwitch}>
      <i className="material-icons">
        {icon}
      </i>
    </div>
  );
}

export default IconSwitch