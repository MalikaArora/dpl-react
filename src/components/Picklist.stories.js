import Picklist from "@avrc/picklist";
import "@avrc/pagination/styles.css";

import React from 'react';
export default {
    title: 'Picklist',
}

export const ShowPicklist = () => {
    const [selectedValues, setSelectedValues] = React.useState([]);
  const items = [
    { text: "Disney Animation", value: "disney" },
    { text: "DreamWorks Animation", value: "dreamworks" },
    { text: "Pixar", value: "pixar" },
    { text: "Warner Animation Group", value: "wag" },
  ];

  return (
    <Picklist
      items={items}
      onChange={(value) => setSelectedValues(value)}
      value={selectedValues}
    />
  );

}