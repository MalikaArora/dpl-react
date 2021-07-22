import React from "react";
import Modal from "@avrc/modal";
//import "./styles.css";

export default {
  title: "Modal",
  args: {
    title: "@avrc/modal",
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
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Modal onDismiss={() => setOpen(false)} open={isOpen} {...props}>
        A wrapper component for showing contents in a modal
      </Modal>
      <button onClick={() => setOpen(true)}>Show Modal</button>
    </>
  );
};