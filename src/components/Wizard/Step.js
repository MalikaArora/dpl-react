import React from "react";
import './styles.css';

const Step = (props) => {
  return <div>{props.childern}</div>;
};

Step.defaultProps = {
  nextallowed : "allowed",
  disabled : "false"
}

export default Step;