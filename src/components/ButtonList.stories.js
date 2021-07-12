
import React from "react";
import ButtonList from "@dpl/react-button-list";

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
      <button>Click Here 1</button>
      <button>Click Here 2</button>
      <button>Click Here 3</button>
      <button>Click Here 4</button>
    </ButtonList> 
  );
};
