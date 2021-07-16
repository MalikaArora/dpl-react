
import React from "react";
import DropDownList from "@dpl/react-dropdown-list";

export default {
  title: "Drop Down",
  args: {
    children: 
    <>
      <DropDownList.Group label="Light Side">
        <DropDownList.Item value="han_solo">Han Solo</DropDownList.Item>
        <DropDownList.Item value="luke_skywalker">Luke Skywalker</DropDownList.Item>
        <DropDownList.Item value="princess_leia">Princess Leia</DropDownList.Item>
      </DropDownList.Group>,
      <DropDownList.Group label="Dark Side">
        <DropDownList.Item value="darth_vader">Darth Vader</DropDownList.Item>
        <DropDownList.Item value="emperor_palpatine">Emperor Palpatine</DropDownList.Item>
      </DropDownList.Group> 
    </>,      
    defaultValue:"darth_vader",
    errorText:"Error - Please choose again",
    label: "Choose a character",
    required: true,
    width: "150px",
  },
};

export const Basic = (props) => {
  const [Value, setValue] = React.useState("0");
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <>
      <DropDownList
        onChange={handleChange}
        {...props}
      />  
    </>
  );
};

Basic.storyName='Drop down - Error';
