import styled from "styled-components";

const StyledTree = styled.div`
  line-height: 1.5;
`;

const TreeView = ({ children }) => {
    return <StyledTree>{children}</StyledTree>;
};

export default TreeView;