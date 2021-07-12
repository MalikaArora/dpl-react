import React from "react";
import Header from "@dpl/react-dpl-header";

export default {
  title: "Header",
  args: {
    appName: "HEADER TITLE",
    logoUrl: "/",
  },
};

export const Basic = (props) => {
  
  return (
    <>
      <Header onLogoClick={() => {alert('You clicked the logo')}} {...props}></Header>
    </>
  );
};
