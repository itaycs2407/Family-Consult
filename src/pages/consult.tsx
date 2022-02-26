import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";

interface Props {}

const Consult: React.FC<Props> = () => {
  return (
    <Container>
      <h1>this is the consult page</h1>
    </Container>
  );
};
const Fadein = keyframes`
from {
  opacity: 0;
}
  to {
    opacity: 1;
  }
  `;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  animation: ${Fadein} 1s;
`;
export default Consult;
