import React from "react";
import Tabs from "./Tab";
import TabPane from "./TabPane";

export default {
  title: "Tabs",
};

export const Basic = (props) => {
  
  return (
    <Tabs>
        <TabPane name="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane name="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane name="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
    </Tabs>
  );
};

Basic.storyName='Tabs';
