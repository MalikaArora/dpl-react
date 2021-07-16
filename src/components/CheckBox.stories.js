
import React from "react";
import CheckBox from "@dpl/react-checkbox";

export default {
  title: "Check Box",
  args: {
    label: 'Check It',      
  },
};

export const Basic = (props) => {
  const [checkBoxState, setcheckBoxState] = React.useState(false);
  const handleChange = () => {
    setcheckBoxState(checkBoxState => !checkBoxState); 
  };

  return (
    <>
      <CheckBox
        onChange={handleChange}
        selected={checkBoxState}
        {...props}
      />  
    </>
  );
};

Basic.storyName='Check Box';
