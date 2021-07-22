import React from "react";
import ErrorIcon from "@avrc/error-icon";

export default {
  title: "@avrc/ErrorIcon",
  component: ErrorIcon
};

export const Basic = (props) => <ErrorIcon {...props} />;

Basic.parameters = {
  controls: { hideNoControlsWarning: true },
};