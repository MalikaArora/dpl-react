import React from "react";
import WindowEvent from "@dpl/react-window-event";

export default {
  title: "WindowEvent",
  args: {
    type: "resize",
  },
  argTypes: {
    type: {
      control: { type: "radio", options: ["resize", "scroll"] },
      type: { required: true },
    },
  },
};

export const Basic = (props) => {
  const [resizeCount, setResizeCount] = React.useState(0);
  const [scrollCount, setScrollCount] = React.useState(0);

  function handler() {
    if (props.type === "resize") {
      setResizeCount((count) => count + 1);
    } else {
      setScrollCount((count) => count + 1);
    }
  }

  return (
    <WindowEvent {...props} handler={handler}>
      <div style={{ height: "2000px" }}>
        <table style={{position:"sticky", top:0}}>
          <tr>
            <th>resize</th>
            <th>scroll</th>
          </tr>
          <tr>
            <td>{resizeCount}</td>
            <td>{scrollCount}</td>
          </tr>
        </table>
      </div>
    </WindowEvent>
  );
};
