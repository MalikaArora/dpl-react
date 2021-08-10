import React from 'react';
import './Notification.css';


const Notification = (props) => {
  const { closeNotification } = props;

  const closeicon = () => (
    <button className="closebutton" onClick={closeNotification}>X</button>
  );

  return (
    <div className="overlay">
      <div className="content">
        { closeicon() }
        {props.children}
      </div>
    </div>
  );
};


export default Notification;