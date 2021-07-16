
import React from "react";
import ButtonList from "@dpl/react-button-list";
import Button from "@dpl/react-button";
export default {
  title: "ButtonList",
  args: {
    spacing: 1,
    vertical: false,
  },
};

export const Basic = (props) => {
  
  return (
    <ButtonList {...props}>
      <Button>Click Here 1</Button>
      <Button>Click Here 2</Button>
      <Button>Click Here 3</Button>
      <Button>Click Here 4</Button>

    </ButtonList> 
  );
};
