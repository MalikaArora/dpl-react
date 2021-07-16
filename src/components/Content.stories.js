import React from "react";
import Content from "@dpl/react-content";

export default {
  title: "Content",
  args: {
    maxWidth: '80px',  
  },
};

export const Basic = (props) => {
  
  return (
    <Content {...props}> 
       <h1>Heading 1</h1> 
       <h2>Heading 2</h2>
       <h3>Heading 3</h3>
       <h4>Heading 4</h4>
       <h5>Heading 5</h5>
       <h6>Heading 6</h6>
       <p>Paragragh</p>
       <blockquote>Blockquote</blockquote>
       <a href="/">A tag</a>
       <ul>Unordered List
           <li>List Items</li>
       </ul>
       <ol>Ordered List
           <li>List Items</li>
       </ol>
    </Content> 
  );
};

Basic.storyName='Content';
