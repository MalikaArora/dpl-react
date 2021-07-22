import React from "react";
import Flex from "@avrc/flex";

export default {
  title: "@avrc/Flex",    
  component: Flex,
  args: {
    gap: 0,
  },
  argTypes: {
    gap: {
      control: { type: "range", min: 0, max: 4, step: 0.5 },
      description: "Spacing between flex items",
    },
  },
};

const Widget = ({ color: background, ...rest }) => (
  <div
    style={{
      ...rest.style,
      background,
      borderRadius: "0.5rem",
      minHeight: "6rem",
    }}
  />
);

export const Basic = (props) => (
  <Flex {...props} wrap>
    <Flex.Item width="50%">
      <Widget color="salmon" style={{ height: "100%" }} />
    </Flex.Item>
    <Flex.Item width="50%">
      <Flex direction="column">
        <Flex.Item>
          <Widget color="cyan" />
        </Flex.Item>
        <Flex.Item>
          <Widget color="violet" />
        </Flex.Item>
      </Flex>
    </Flex.Item>
    <Flex.Item>
      <Widget color="green" style={{ width: "12rem" }} />
    </Flex.Item>
    <Flex.Item grow={1}>
      <Widget color="yellow" />
    </Flex.Item>
  </Flex>
);
