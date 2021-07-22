import React from "react";
import ErrorBoundary from "@avrc/error-boundary";

export default {
  title: "@avrc/ErrorBoundary",
  component: ErrorBoundary,
};

const ThrowError = () => {
  throw Error("unhandled error");
};

export const Basic = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);

Basic.parameters = {
  controls: { hideNoControlsWarning: true },
};