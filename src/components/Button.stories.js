
import React from "react";
import Button from "@dpl/react-button";

export default {
  title: "Button",
  args: {
      disabled: false,
      primary: true,
      children: 'Click Here',
      type: "button",
    
  },
};

export const Basic = (props) => {
  return (
    <>
      <Button onClick={() => {alert('You clicked')}} {...props}></Button>
    </>
  );
};

Basic.storyName='Button';
