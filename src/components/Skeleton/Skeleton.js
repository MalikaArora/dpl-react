
import styled from "styled-components";
import React from "react";

const SSkeleton = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  border-radius: 5px;
  animation: wave 1s ease-in-out infinite;
  margin: 0.3em 0;
  box-sizing: border-box;

  &::before {
    content: "\\00a0";
  }

  @keyframes wave {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const Skeleton = ({ amount = 1 }) => {
  
  return new Array(amount).fill(0).map((_, i) => <SSkeleton key={i} />);
};

export default Skeleton;
