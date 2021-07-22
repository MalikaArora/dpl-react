import React from "react";
import SaveAlert from "@avrc/save-alert";

export default {
  title: "SaveAlert",
  args: {
    title: "@avrc/save-alert",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Title displayed in header",
      type: { required: true },
    },
  },
};

export const Basic = (props) => {
  const [viewData, setViewData] = React.useState({ test: "default" });

  return (
    <>
      <SaveAlert
        viewData={viewData}
        isPersonalPage={true}
        defaultViewData={{ test: "default" }}
        {...props}
      />
      <button onClick={() => setViewData({ test: "new" })}>Show Alert</button>
    </>
  );
};