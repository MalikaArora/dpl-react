import React from "react";
import DatePicker from "./DatePicker";

export default {
  title: "DatePicker",
};

function handleChange(timestamp) {
    let d = new Date(timestamp); 
    alert("You set " + d);
  }
export const Basic = (props) => {
  
  return (
    <DatePicker onChange={handleChange}/>
  );
};

Basic.storyName='DatePicker';