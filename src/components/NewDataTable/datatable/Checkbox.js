import React from "react";

const Checkbox = ({ id, type, name, handleClick, isChecked }, props) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
      defaultChecked={true}
    //   {props.comment.choices ? checked }
    />
  );
};

export default Checkbox;