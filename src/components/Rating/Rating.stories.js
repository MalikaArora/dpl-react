import React from "react";
import Rating from "./Rating";

export default {
  title: "Rating",
  args: {
    totalStars: 6,  
  },
};

export const Basic = (props) => {
  
  return (
    <Rating {...props} /> 
  );
};

Basic.storyName='Rating';
