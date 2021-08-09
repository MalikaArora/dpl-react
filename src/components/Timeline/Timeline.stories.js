import React from "react";
import Timeline from './Timeline';

export default {
  title: "Timeline",
};

export const Basic = (props) => {
  
  return (
    <Timeline>
      <Timeline.Item 
        text="EAT CODE SLEEP"
        date="July 13 2021"
        tag_heading="PAST"
        tag_color="#019f69"
        link_url="https://en.wikipedia.org/wiki/Eat,_Sleep,_Repeat"
        link_text="Read more"
      />
      <Timeline.Item 
        text="EAT CODE SLEEP"
        date="July 14 2021"
        tag_heading="PRESENT"
        tag_color="#018f99"
        link_url="https://en.wikipedia.org/wiki/Eat,_Sleep,_Repeat"
        link_text="Read more"
      />
      <Timeline.Item 
        text="EAT CODE SLEEP"
        date="July 15 2021"
        tag_heading="FUTURE"
        tag_color="#ff8f69"
        link_url="https://en.wikipedia.org/wiki/Eat,_Sleep,_Repeat"
        link_text="Read more"
      />
    </Timeline>
  );
};

Basic.storyName='Timeline';
