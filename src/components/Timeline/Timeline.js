import React from "react";
import Item from "./Item";
import "./Timeline.css";

const Timeline = React.forwardRef(
  (
    {
      children = null,
      ...rest
    },
    ref
  ) => (
    <div className="timeline-container"
        ref={ref}
    >
        {children}
    </div>
  )
);

Timeline.Item = Item;

export default Timeline;