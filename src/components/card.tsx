import React from "react";
import styled from "@emotion/styled/macro";

const Card: React.FC = (children) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 100px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  background-color: #61dafb;
`;
export default Card;
