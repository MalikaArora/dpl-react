import React, { useState } from "react";
import "./styles.css";
import Skeleton from "./Skeleton";
import styled from "styled-components";
export default {
  title: 'Skeleton',
}
const SPost = styled.div`
background-color: white;

  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 1em;

  > * {
    width: 100%;
  }

  p {
    line-height: 1.6em;
    margin-bottom: 0em;
    font-size: 1.1em;
  }

  h1 {
    font-size: 2em;
    margin: 0 0 0.5em 0;
  }
`;

const Post1 = () => {
  const [data, setData] = useState({
    heading: "",
    body: ""
  });


  return (
    <SPost>
      <h1>{data.heading || <Skeleton />}</h1>
      <p>{data.body || <Skeleton amount={5} />}</p>
    </SPost>
  );
};

const Post2 = () => {
  const [data, setData] = useState({
    heading: "",
    body: ""
  });

  // Mimic API request
  setTimeout(() => {
    setData({
      heading: "Sample Skeleton Loader",
      body:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    });
  }, 2500);

  return (
    <SPost>
      <h1>{data.heading || <Skeleton />}</h1>
      <p>{data.body || <Skeleton amount={5} />}</p>
      <p>{data.body || <Skeleton amount={5} />}</p>
      <p>{data.body || <Skeleton amount={5} />}</p>
    </SPost>
  );
};
export const ShowSkeleton = () => {
  return (
    <div className="ShowSkeleton">
      <Post1 />
    </div>
  );
}

export const ShowSampleSkeleton = () => {
  return (
    <div className="ShowSkeleton">
      <Post2 />
    </div>
  );
}

ShowSkeleton.storyName='Layout';
ShowSampleSkeleton.storyName='Sample';
