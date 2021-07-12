import React from "react";
import Label from "@dpl/react-label";

export default {
  title: "Label",
  args: {
    error: false,
    required: false,    

  },  
};

export const Basic = (props) => {
  
  return (
    <>
      <Label {...props}>Used to set error and required attributes in other components</Label>
    </>
  );
};
