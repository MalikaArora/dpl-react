import React from "react";
import LoadingState from "@avrc/loading-state";

export default {
  title: "@avrc/LoadingState",
  component: LoadingState,
  argTypes: {
    error: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
  },
};

export const Basic = (props) => (
  <LoadingState {...props}>
    <div
      style={{
        alignItems: "center",
        background: "lightgray",
        borderRadius: "0.5rem",
        display: "flex",
        justifyContent: "center",
        minHeight: "12rem",
        padding: "2rem",
      }}
    >
      Example
    </div>
  </LoadingState>
);